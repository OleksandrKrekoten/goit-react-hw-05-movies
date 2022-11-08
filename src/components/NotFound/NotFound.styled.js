import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const Wraper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  -webkit-animation: color-change-2x 2s linear infinite alternate both;
  animation: color-change-2x 2s linear infinite alternate both;
  @-webkit-keyframes color-change-2x {
    0% {
      background: rgb(32, 38, 57);
    }
    100% {
      background: rgb(63, 76, 119);
    }
  }
  @keyframes color-change-2x {
    0% {
      background: rgb(32, 38, 57);
    }
    100% {
      background: rgb(63, 76, 119);
    }
  }
`;
export const LinkGoHome = styled(Link)`
  padding: 10px 15px;
  border-radius: 6px;
  border: 1px solid #f0507d;
  color: #f0507d;
  text-decoration: none;
  :hover {
    -webkit-animation: vibrate-1 0.3s linear infinite both;
    animation: vibrate-1 0.3s linear infinite both;
    @-webkit-keyframes vibrate-1 {
      0% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
      20% {
        -webkit-transform: translate(-2px, 2px);
        transform: translate(-2px, 2px);
      }
      40% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
      }
      60% {
        -webkit-transform: translate(2px, 2px);
        transform: translate(2px, 2px);
      }
      80% {
        -webkit-transform: translate(2px, -2px);
        transform: translate(2px, -2px);
      }
      100% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
    }
    @keyframes vibrate-1 {
      0% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
      20% {
        -webkit-transform: translate(-2px, 2px);
        transform: translate(-2px, 2px);
      }
      40% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
      }
      60% {
        -webkit-transform: translate(2px, 2px);
        transform: translate(2px, 2px);
      }
      80% {
        -webkit-transform: translate(2px, -2px);
        transform: translate(2px, -2px);
      }
      100% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
    }
  }
`;
