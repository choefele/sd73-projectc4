function Favourites() {
  return (
    <>
      <section className="p-4 border-b border-body">
        <h1>Favourites</h1>
        <h2>Movies</h2>
        {/* {loading && <p>Loading...</p>}
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
        )} */}
      </section>
    </>
  );
}

export default Favourites;
