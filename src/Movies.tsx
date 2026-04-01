import MoviesCard from "./MoviesCard";

function Movies() {
  return (
    <>
      <h2>Movies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <MoviesCard title="Title" year="1234" genre="Genre" rating={5.3} />
      </div>
    </>
  );
}

export default Movies;
