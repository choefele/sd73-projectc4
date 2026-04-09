import { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import {
  fetchPopularMovies,
  type TmdbPopularMoviesResponse,
} from "../lib/tmdbapi";

function Movies() {
  const [moviesResponse, setMoviesResponse] =
    useState<TmdbPopularMoviesResponse>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      setLoading(true);

      try {
        const moviesResponse = await fetchPopularMovies();
        if (!ignore) {
          setMoviesResponse(moviesResponse);
        }
      } catch (err) {
        if (!ignore) {
          setError(err instanceof Error ? err.message : "Unknown error");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <h2>Movies</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {moviesResponse && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {moviesResponse.results.map((movie) => (
            <MoviesCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.release_date}
              genre="Genre"
              rating={movie.vote_average}
              posterPath={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              posterAlt={movie.title}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Movies;
