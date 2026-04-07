import { afterEach, describe, expect, it, vi } from "vitest";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  vi.resetModules();
});

describe("fetchPopularMovies", () => {
  it("calls TMDB popular movies endpoint with bearer auth", async () => {
    vi.stubEnv("VITE_TMDB_BEARER_TOKEN", "test-token");

    const mockResponse = {
      page: 2,
      results: [
        {
          id: 1,
          title: "Test Movie",
          overview: "A movie used for testing.",
          release_date: "2026-01-01",
          vote_average: 8.2,
          poster_path: "/poster.jpg",
        },
      ],
      total_pages: 10,
      total_results: 200,
    };

    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(mockResponse),
    });
    vi.stubGlobal("fetch", fetchMock);

    const { fetchPopularMovies } = await import("./tmdbapi");
    const result = await fetchPopularMovies(2);

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer test-token",
        },
      },
    );
    expect(result).toEqual(mockResponse);
  });
});
