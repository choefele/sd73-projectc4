import { Star } from "lucide-react";
import { isFavourite, removeFavourite, storeFavourite } from "../lib/localStorage";
import { useEffect, useState } from "react";

function MoviesCard({
  id,
  title,
  year,
  genre,
  rating,
  posterPath,
  posterAlt,
}: {
  id: number;
  title: string;
  year: string;
  genre: string;
  rating: number;
  posterPath: string;
  posterAlt: string;
}) {
  const [isMarkedAsFavourite, setMarkedAsFavourite] = useState(() =>
    isFavourite(id),
  );

  useEffect(() => {
    setMarkedAsFavourite(isFavourite(id));
  }, [id]);

  return (
    <article className="group flex flex-col bg-white rounded-lg overflow-hidden transition-all duration-300">
      <div className="aspect-2/3 w-full overflow-hidden relative">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-alt={posterAlt}
          src={posterPath}
        />
        <div className="absolute top-2 right-2">
          <span className="bg-secondary text-headline px-2 py-1 rounded text-xs font-bold flex items-center gap-1 shadow-sm">
            <Star className="h-lh" />
            {rating.toFixed(1)}
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col grow">
        <div className="mb-3">
          <h3 className="font-headline font-bold text-base line-clamp-1">
            {title}
          </h3>
          <p className="text-xs font-medium">
            {year} • {genre}
          </p>
        </div>
        <button
          onClick={() => {
            setMarkedAsFavourite((previous) => {
              if (previous) {
                removeFavourite(id);
                return false;
              }

              storeFavourite({
                id,
                title,
                year,
                genre,
                rating,
                posterPath,
                posterAlt,
              });
              return true;
            });
          }}
          className="mt-auto w-full py-2 px-3 bg-[#eff1f3] hover:bg-primary-container/20 text-primary rounded font-bold text-xs flex items-center justify-center gap-2 transition-colors"
        >
          <Star className="h-lh" />
          {isMarkedAsFavourite ? "Remove from Favourites" : "Add to Favourites"}
        </button>
      </div>
    </article>
  );
}

export default MoviesCard;
