import styled from "styled-components";

export const Loader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  font-weight: bold;
`;

export const Dot = styled.span`
  position: absolute;
  left: 48%;
  top: 51%;
  transform: translate(-50%, -50%);
  font-size: 10rem;
  opacity: 0;
  animation: sides 3s infinite;
  @keyframes sides {
    0% {
      opacity: 0;
    }

    25% {
      position: absolute;
      left: 50%;
      opacity: 1;
      font-size: 15rem;
    }

    50% {
      position: absolute;
      left: 52%;
      opacity: 0;
      font-size: 10rem;
    }

    75% {
      position: absolute;
      left: 50%;
      opacity: 1;
      font-size: 15rem;
    }

    100% {
      opacity: 0;
    }
  }
`;

export const MutedDots = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  font-size: 4rem;
  opacity: 0.5;
  animation: load 1.5s infinite;
  @keyframes load {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }
`;
