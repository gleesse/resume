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

  text-decoration: underline 0.15em rgba(255, 255, 255, 0);
  text-underline-offset: 0.7em;
  transition: text-decoration-color 500ms;

  &.active {
      color: #34D399;
  }
  :hover{
    color: #34D399;
    text-decoration-color: #34D399;
    text-underline-offset: 0.25em;
  }
`;