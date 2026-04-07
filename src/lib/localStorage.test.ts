import { describe, expect, it } from "vitest";
import { isFavorite, toggleFavourite } from "./localStorage";

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

  it("marks a movie ID as favorite after toggling it once", () => {
    const movieId = createMovieId();

    toggleFavourite(movieId);

    expect(isFavorite(movieId)).toBe(true);
  });

  it("does not mark a different movie ID as favorite", () => {
    const favoriteMovieId = createMovieId();
    const otherMovieId = createMovieId();

    toggleFavourite(favoriteMovieId);

    expect(isFavorite(favoriteMovieId)).toBe(true);
    expect(isFavorite(otherMovieId)).toBe(false);
  });

  it("tracks multiple favorite movie IDs independently", () => {
    const movieIdA = createMovieId();
    const movieIdB = createMovieId();
    const movieIdC = createMovieId();

    toggleFavourite(movieIdA);
    toggleFavourite(movieIdB);
    toggleFavourite(movieIdC);

    expect(isFavorite(movieIdA)).toBe(true);
    expect(isFavorite(movieIdB)).toBe(true);
    expect(isFavorite(movieIdC)).toBe(true);
  });

  it("removes a favorite when toggling the same movie ID twice", () => {
    const movieId = createMovieId();

    toggleFavourite(movieId);
    toggleFavourite(movieId);

    expect(isFavorite(movieId)).toBe(false);
  });
});
