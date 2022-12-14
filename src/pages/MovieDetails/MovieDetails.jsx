import { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from '../../services/api';
import {
  Flex,
  IMG,
  GoBack,
  Description,
  LinkList,
  LinkNav,
} from './MovieDetails.styled';
import {
  BsFillArrowLeftCircleFill,
  BsChatRightText,
  BsPersonLinesFill,
} from 'react-icons/bs';
const MovieDetails = () => {
  const location = useLocation();
  const [movies, setMovies] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    getMovieById(movieId).then(response => {
      setMovies(response.data);
    });
  }, [movieId]);
  const backLink = location.state?.from ?? '/';
  
  return (
    <>
      <GoBack to={backLink}>
        <BsFillArrowLeftCircleFill />
        <span>Go back</span>
      </GoBack>
      <Flex>
        <div>
          <IMG
            src={
              movies.poster_path
                ? 'https://image.tmdb.org/t/p/w500' + movies.poster_path
                : 'https://ik.imagekit.io/dqs5dhaf3/page-not-found-error-with-film-flap-design-vector-33133106_8zxj4ah09.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667913391220'
            }
            alt={movies.title}
            width={250}
          />
        </div>
        <div>
          <h2>{movies.title}</h2>
          <Description>{movies.overview}</Description>
          <p>
            Genres:{' '}
            {movies.genres &&
              movies.genres.map(genre => genre.name).join(' , ')}
          </p>
          <p>Release: {new Date(movies.release_date).toLocaleDateString()}</p>
        </div>
      </Flex>
      <LinkList>
        <li>
          <LinkNav to="cast" state={{ from: backLink }}>
            <BsPersonLinesFill />
            <span>Cast</span>
          </LinkNav>
        </li>
        <li>
          <LinkNav to="reviews" state={{ from: backLink }}>
            <BsChatRightText />
            <span>Review</span>
          </LinkNav>
        </li>
      </LinkList>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
