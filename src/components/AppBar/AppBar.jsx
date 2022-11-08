import { BsFilm, BsHouseFill } from 'react-icons/bs';
import { MovieList, NavItem, Header, Span } from './AppBar.styled';
export const AppBar = () => {
  return (
    <Header>
      <nav>
        <MovieList>
          <li>
            <NavItem to={'/'}>
              <BsHouseFill />
              <Span>Home</Span>
            </NavItem>
          </li>
          <li>
            <NavItem to={'/movies'}>
              <BsFilm />
              <Span>Movies</Span>
            </NavItem>
          </li>
        </MovieList>
      </nav>
    </Header>
  );
};
