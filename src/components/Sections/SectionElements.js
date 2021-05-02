import styled from 'styled-components'

export const InfoContainer = styled.div`
  background-color: #0e0f0f;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: grid;
  align-items: center;
  padding: 2rem 3.5rem;

  @media screen and (max-width: 768px){
    padding: 1rem;
  }
`;

export const H1 = styled.h1`
  text-shadow: -2px 2px 2px #81E02D;
  user-select: none;
  font-family: 'Cambay', sans-serif;

  h1 {
  position: absolute;
  color: #ffff64;
  }

  .stroke{   
    animation: deconstructed 4s infinite ease-in;
  }

  h1:nth-child(1){
    -webkit-mask-image: linear-gradient(black 25%, transparent 25%);
    mask-image: linear-gradient(black 25%, transparent 25%);
  }

  h1:nth-child(2) {
  -webkit-mask-image: linear-gradient(transparent 25%, black 25%, black 50%, transparent 50%);
    mask-image: linear-gradient(transparent 25%, black 25%, black 50%, transparent 50%);
  }

  h1:nth-child(3) {
   -webkit-mask-image: linear-gradient(transparent 50%, black 50%, black 75%, transparent 75%);
    mask-image: linear-gradient(transparent 50%, black 50%, black 75%, transparent 75%);
  }

  h1:nth-child(4) {
   -webkit-mask-image: linear-gradient(transparent 75%, black 75%);
    mask-image: linear-gradient(transparent 75%, black 75%);
  }

  @keyframes deconstructed {
  0% {
    transform: translateX(-150%);
    text-shadow: none;
    color: transparent;
  }
  30% {
    text-shadow: none;
    color: transparent;
    transform: translateX(2%);
  }
  85% {
    color:#34d399;
    transform: translateX(-2%);
  }
  90% {
    color: transparent;
  }
  100% {
    text-shadow: none;
    color: transparent;
    transform: translateX(-150%);
  }
}
  
`;

export const Link = styled.a`
  cursor: pointer;
  color: #ffff64;
  font-style: italic;

  :hover{
    text-decoration: underline;
  }

  :visited{
    color: #9969C7;
  }
`;

export const Pa = styled.p`
  color: #fff;
  font-weight: 500;
  font-family: monospace;
  letter-spacing: -0.06em;
  font-size: 1.5rem;
  line-height: 1.5rem;

  @media (min-width: 1024px){
    font-size: 2.25rem;
    line-height: 2rem;
  }

  @media (min-width: 768px){
    font-size: 2rem;
    line-height: 1.75rem;
  }

  @media (max-height: 512px){
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`;
