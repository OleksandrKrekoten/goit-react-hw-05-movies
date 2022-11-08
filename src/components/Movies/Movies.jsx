import React, { useState } from 'react';
import { useEffect } from 'react';
import { getMovieByName } from '../../services/api';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    if (searchQuery !== '') {
      getMovieByName(searchQuery)
        .then(response => {
          console.log(response.data.results);
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
    setSearchQuery(e.target.elements.query.value);
    setMovies([]);
    e.target.elements.query.value = '';

    return console.log('submitForm');
  };

  return (
    <>
      {' '}
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <input name="query" type="text" placeholder="Search movies" />
      </form>
      <ul>
        {movies.map(({ id, title, release_date }) => {
          return (
            <li key={id}>
              <NavLink to={`/movies/${id}`}>
                <h2>
                  {title} ({release_date.slice(0, 4)})
                </h2>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};
