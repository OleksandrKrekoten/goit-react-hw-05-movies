import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getTrendingMovies } from '../../services/api';
const Home = () => {
    const location = useLocation();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(response => {
      setMovies([...response.data.results]);
    });
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title, release_date }) => {
            return (
              <li key={id}>
                <NavLink to={`/movies/${id}`} state={{ from: location }}>
                  <h2>
                    {title} ({release_date.slice(0, 4)})
                  </h2>
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default Home;