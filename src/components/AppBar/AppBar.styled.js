import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  padding: 10px;
`;
export const MovieList = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;
`;

export const NavItem = styled(NavLink)`
  padding: 10px 15px;
  border-radius: 6px;
  border: 1px solid rgb(32, 38, 57);
  color: rgb(32, 38, 57);
  text-decoration: none;
  &.active {
    background-color: rgb(32, 38, 57);
    color: #ffffff;
  }
`;
export const Span = styled.span`
  margin-left: 8px;
`;
