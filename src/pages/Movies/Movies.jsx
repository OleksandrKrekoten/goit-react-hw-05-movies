import React, { useState } from 'react';
import { useEffect } from 'react';
import { getMovieByName } from '../../services/api';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [SearchParams, setSearchParams] = useSearchParams();
  const searchQuery = SearchParams.get('query') ?? '';
  useEffect(() => {
    if (searchQuery !== '') {
      getMovieByName(searchQuery)
        .then(response => {
          if (response.data.results.length === 0) {
            toast.error('Nothing found❗');
          }
          if (response.data.results.length > 0) {
            setMovies([...response.data.results]);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(
      e.target.elements.query.value !== ''
        ? { query: e.target.elements.query.value }
        : {}
    );
    setMovies([]);
    e.target.elements.query.value = '';
  };

  return (
    <>
      {' '}
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <input name="query" type="text" placeholder="Search movies" />
      </form>
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
export default Movies;
