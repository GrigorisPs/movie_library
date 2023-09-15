
function MovieCard({movie}) {
  return (
    <div className="movie">
      <div>
        <p> Release date: {movie.release_date}</p>
      </div>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} alt={movie.title} />
      </div>
      <div>
        <span>Imdb score: {Math.round(movie?.vote_average)} </span>
        <h3>{movie.title}</h3>
      </div>

    </div>
  )
}

export default MovieCard