import MoviesCard from "../components/MoviesCard";
import { getFavourites } from "../lib/localStorage";

function Favourites() {
  const favourites = getFavourites();

  return (
    <>
      <section className="p-4 border-b border-body">
        {favourites.length === 0 && <p>No favourites yet</p>}
        {favourites.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {favourites.map((movie) => (
              <MoviesCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                genre="Genre"
                rating={movie.rating}
                posterPath={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`}
                posterAlt={movie.title}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Favourites;
