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

function storeFavorite(id: number): void {
  const ids = getStoredFavorites();
  if (ids.includes(id)) {
    return;
  }

  ids.push(id);
  setStoredFavorites(ids);
}

export { isFavorite, storeFavorite };
