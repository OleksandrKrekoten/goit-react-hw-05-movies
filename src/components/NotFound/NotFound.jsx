import { BsHouseFill } from 'react-icons/bs';
import { Wraper, LinkGoHome } from './NotFound.styled';
export const NotFound = () => {
  return (
    <Wraper>
      <img
        src="https://ik.imagekit.io/dqs5dhaf3/pngegg_Fvi3uBr8K.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667561556974"
        alt="page not found"
      />
      <LinkGoHome to={'/'}>
        <BsHouseFill />
        Back to homepage
      </LinkGoHome>
    </Wraper>
  );
};
