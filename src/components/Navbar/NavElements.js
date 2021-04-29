import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Nav = styled.nav`
  margin-top: -64px;
  background: ${({scrollNav}) => (scrollNav? 'black' : 'transparent')};
  border-bottom-width: ${({scrollNav}) => (scrollNav? '2px' : '0px')};
  border-color: #34D399;
`;

export const NavLink = styled(Link)`
  padding: 1rem;
  transition: 0.3s ease-in-out; 
  cursor: pointer;

  &.active {
      color: #34D399;
  }

  :hover{
    color: #34D399;
  }
`;