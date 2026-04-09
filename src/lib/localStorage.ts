const FAVORITES_STORAGE_KEY = "favoriteMovies";

type Movie = {
  id: number;
  title: string;
  year: string;
  genre: string;
  rating: number;
  posterPath: string;
  posterAlt: string;
};

function getFavourites(): Movie[] {
  const raw = globalThis.localStorage.getItem(FAVORITES_STORAGE_KEY);
  return raw ? (JSON.parse(raw) as Movie[]) : [];
}

function setStoredFavorites(movies: Movie[]): void {
  globalThis.localStorage.setItem(
    FAVORITES_STORAGE_KEY,
    JSON.stringify(movies),
  );
}

function isFavourite(id: number): boolean {
  return getFavourite(id) !== null;
}

function storeFavourite(movie: Movie): void {
  const movies = getFavourites();
  const { id } = movie;

  if (movies.some((storedMovie) => storedMovie.id === id)) {
    return;
  }

  movies.push(movie);
  setStoredFavorites(movies);
}

function removeFavourite(id: number): void {
  const movies = getFavourites();
  const filteredMovies = movies.filter((storedMovie) => storedMovie.id !== id);

  setStoredFavorites(filteredMovies);
}

function getFavourite(id: number): Movie | null {
  return getFavourites().find((storedMovie) => storedMovie.id === id) ?? null;
}

export {
  isFavourite,
  storeFavourite,
  removeFavourite,
  getFavourite,
  getFavourites,
  type Movie,
};
