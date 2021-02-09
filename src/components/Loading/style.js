import styled, { keyframes } from "styled-components";

const spin = keyframes`
  100%{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: #333c;
  font-size: 1.2em;
  font-weight: bold;

  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  user-select: none;

  >img{
    width: 100px;
    height: 100px;
    border-radius: 50%;

    animation: ${spin} 1.8s linear infinite;
  }
`;
