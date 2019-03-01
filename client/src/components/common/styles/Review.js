import styled from "styled-components";

export const ReviewWrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.5;
  filter: brightness(10%);
`;

export const ReviewCard = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`;
