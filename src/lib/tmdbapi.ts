const TMDB_API_BASE_URL = "https://api.themoviedb.org/3/movie";
const TMDB_BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

type TmdbPopularMoviesResponse = {
  page: number;
  results: Array<{
    id: number;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
    poster_path: string | null;
  }>;
  total_pages: number;
  total_results: number;
};

async function fetchPopularMovies(
  page = 1,
): Promise<TmdbPopularMoviesResponse> {
  if (!TMDB_BEARER_TOKEN) {
    throw new Error(
      "Missing TMDB token. Set VITE_TMDB_BEARER_TOKEN in your environment.",
    );
  }

  const url = `${TMDB_API_BASE_URL}/popular?language=en-US&page=${page}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_BEARER_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error(`TMDB request failed: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<TmdbPopularMoviesResponse>;
}

export { type TmdbPopularMoviesResponse, fetchPopularMovies };
