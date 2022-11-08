import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const Flex = styled.div`
  display: flex;
`;

export const IMG = styled.img`
  display: block;
  margin-right: 20px;
`;
export const GoBack = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  color: rgb(32, 38, 57);
  transition: color 300ms;
  span {
    margin-left: 5px;
  }
  :hover {
    color: #f0507d;
  }
`;

export const Description = styled.p`
  width: 500px;
`;
export const LinkList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;
export const LinkNav = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 8px;
  color: rgb(32, 38, 57);
  border: 1px solid rgb(32, 38, 57);
  border-radius: 8px;
  transition: color border 300ms;
  span {
    margin-left: 5px;
  }
  :hover {
    color: #f0507d;
    border: 1px solid #f0507d;
  }
`;
