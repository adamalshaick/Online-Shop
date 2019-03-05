import styled from "styled-components";

export const Badge = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  opacity: 0.85;
  font-family: "Montserrat", sans-serif;
`;

export const Border = styled.div`
  width: 500px;
  height: 250px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  border: white solid 2px;
`;

export const Text = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-size: 28px;
`;
