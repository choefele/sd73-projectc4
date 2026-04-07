const FAVORITES_STORAGE_KEY = "favoriteMovieIds";

function getStoredFavorites(): number[] {
  const raw = globalThis.localStorage.getItem(FAVORITES_STORAGE_KEY);
  return raw ? (JSON.parse(raw) as number[]) : [];
}

function setStoredFavorites(ids: number[]): void {
  globalThis.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(ids));
}

function isFavorite(id: number): boolean {
  return getStoredFavorites().includes(id);
}

function toggleFavourite(id: number): void {
  const ids = getStoredFavorites();
  const idIndex = ids.indexOf(id);

  if (idIndex >= 0) {
    ids.splice(idIndex, 1);
    setStoredFavorites(ids);
    return;
  }

  ids.push(id);
  setStoredFavorites(ids);
}

export { isFavorite, toggleFavourite };
