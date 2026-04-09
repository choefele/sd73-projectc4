import { describe, expect, it } from "vitest";
import { getFavourite, removeFavourite, storeFavourite, type Movie } from "./localStorage";

let nextMovieId = Date.now() * 1000;

function createMovieId(): number {
  nextMovieId += 1;
  return nextMovieId;
}

function createMovie(id: number): Movie {
  return {
    id,
    title: "Test Movie",
    year: "2026",
    genre: "Drama",
    rating: 8.2,
    posterPath: "/test-poster.jpg",
    posterAlt: "Test movie poster",
  };
}

describe("localStorage favorites API", () => {
  it("returns null for a movie ID that was never stored", () => {
    const movieId = createMovieId();

    expect(getFavourite(movieId)).toBeNull();
  });

  it("returns a movie after storing it", () => {
    const movieId = createMovieId();
    const movie = createMovie(movieId);

    storeFavourite(movie);

    expect(getFavourite(movieId)).toEqual(movie);
  });

  it("does not return a different stored movie", () => {
    const favoriteMovieId = createMovieId();
    const otherMovieId = createMovieId();

    storeFavourite(createMovie(favoriteMovieId));

    expect(getFavourite(favoriteMovieId)).not.toBeNull();
    expect(getFavourite(otherMovieId)).toBeNull();
  });

  it("tracks multiple favorite movies independently", () => {
    const movieIdA = createMovieId();
    const movieIdB = createMovieId();
    const movieIdC = createMovieId();

    storeFavourite(createMovie(movieIdA));
    storeFavourite(createMovie(movieIdB));
    storeFavourite(createMovie(movieIdC));

    expect(getFavourite(movieIdA)).not.toBeNull();
    expect(getFavourite(movieIdB)).not.toBeNull();
    expect(getFavourite(movieIdC)).not.toBeNull();
  });

  it("returns null after removing a stored movie ID", () => {
    const movieId = createMovieId();

    storeFavourite(createMovie(movieId));
    removeFavourite(movieId);

    expect(getFavourite(movieId)).toBeNull();
  });
});
