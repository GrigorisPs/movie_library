import { useEffect, useState } from 'react';
import './App.css';
import search from './components/search.svg'
import MovieCard from './components/MovieCard';


function App() {
  const [movies, setMovies] = useState([])
  const [searchInput, setSearchInput] = useState('')

  const API_KEY = 'b980ab418161262d715d1b02eddbec35'
  const BASE_URL = 'https://api.themoviedb.org/3'

  const searchMovies = async (title) => {
    const response = await fetch(`${BASE_URL}/search/movie?include_adult=false&page=1&language=en-US&api_key=${API_KEY}&query=${title}`)
    const movie_data = await response.json();
    // eslint-disable-next-line no-undef
    setMovies(movie_data.results)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      searchMovies(searchInput)
    }
  };

  useEffect(() => {
    searchMovies()
  }, [])
  return (
    <div className="App">
      <h1>Movies</h1>

      <div className="search" onKeyDown={handleKeyDown}>
        <input placeholder='search for movies' type='text' value={searchInput}
          onChange={(e) => { setSearchInput(e.target.value) }}
        />
        <img className='movieImage' src={search} alt='search'
          onClick={() => searchMovies(searchInput)} />
      </div>

      {movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2> </div>

        )}



    </div>
  );
}

export default App;
