import styled from 'styled-components'

export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 512px;
  display: grid;
  align-items: center;

  @media screen and (max-width: 768px){
    min-height: 1024px;
  }
`;

  export const H1 = styled.h1`
  text-shadow: -2px 2px 2px #81E02D;
`;