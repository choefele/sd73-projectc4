import { describe, expect, it } from "vitest";
import { isFavorite, storeFavorite } from "./localStorage";

let nextMovieId = Date.now() * 1000;

function createMovieId(): number {
  nextMovieId += 1;
  return nextMovieId;
}

describe("localStorage favorites API", () => {
  it("returns false for a movie ID that was never stored", () => {
    const movieId = createMovieId();

    expect(isFavorite(movieId)).toBe(false);
  });

  it("marks a movie ID as favorite after storing it", () => {
    const movieId = createMovieId();

    storeFavorite(movieId);

    expect(isFavorite(movieId)).toBe(true);
  });

  it("does not mark a different movie ID as favorite", () => {
    const favoriteMovieId = createMovieId();
    const otherMovieId = createMovieId();

    storeFavorite(favoriteMovieId);

    expect(isFavorite(favoriteMovieId)).toBe(true);
    expect(isFavorite(otherMovieId)).toBe(false);
  });

  it("tracks multiple favorite movie IDs independently", () => {
    const movieIdA = createMovieId();
    const movieIdB = createMovieId();
    const movieIdC = createMovieId();

    storeFavorite(movieIdA);
    storeFavorite(movieIdB);
    storeFavorite(movieIdC);

    expect(isFavorite(movieIdA)).toBe(true);
    expect(isFavorite(movieIdB)).toBe(true);
    expect(isFavorite(movieIdC)).toBe(true);
  });

  it("is idempotent when storing the same movie ID multiple times", () => {
    const movieId = createMovieId();

    storeFavorite(movieId);
    storeFavorite(movieId);

    expect(isFavorite(movieId)).toBe(true);
  });
});
