import React from "react";
import styled from "styled-components";

const Loader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  font-weight: bold;
`;

const Dot = styled.span`
  position: absolute;
  left: 48%;
  top: 51%;
  transform: translate(-50%, -50%);
  font-size: 10rem;
  //   color: purple;
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

const Loading = () => {
  return (
    <>
      <Loader>LOADING</Loader>
      <Dot>.</Dot>
    </>
  );
};

export default Loading;
