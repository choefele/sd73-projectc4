import { Star } from "lucide-react";

function MoviesCard({
  title,
  year,
  genre,
  rating,
}: {
  title: string;
  year: string;
  genre: string;
  rating: number;
}) {
  return (
    <div className="group flex flex-col bg-white rounded-lg overflow-hidden transition-all duration-300">
      <div className="aspect-2/3 w-full bg-surface-container overflow-hidden relative">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-alt="Cinematic movie poster of a neon-lit futuristic city at night with rain reflecting on the pavement and a lone figure"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtg_yoVCD46JrQBYgLL0_dgByafgUli8Hfd-1Tjbne93GCAfonQzwoSzCBNM-wd3fxrt81WD7_P0I88DKpAAG2WstcTrNZa5XROy4csdP5jM3LWBqGuP3nO5yX4yjTJhECWrPKPf8M0bWupcnig1VD90OlTT7q4w9C2opBYcaRzS4LxvYiLqPo_56qreU4Qm772zZYkHKn1LEOibzmTL9qxHeadSQksMWgZJKCuhYylggD406G5z-xosWVVG8Ggjf3xNLpc0xOILkS"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-secondary text-headline px-2 py-1 rounded text-xs font-bold flex items-center gap-1 shadow-sm">
            <Star className="h-lh" />
            {rating}
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
        <button className="mt-auto w-full py-2 px-3 bg-[#eff1f3] hover:bg-primary-container/20 text-primary rounded font-bold text-xs flex items-center justify-center gap-2 transition-colors">
          <Star className="h-lh" />
          Add to Favourites
        </button>
      </div>
    </div>
  );
}

export default MoviesCard;
