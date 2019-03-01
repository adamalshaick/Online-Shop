import styled from "styled-components";

export const StyledNavbar = styled.header`
  width: 100%;
  height: 5rem;
  box-shadow: 0px 8px 20px 0px rgba(204, 204, 204, 0.7);
  background-color: white;
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  margin-top: 1.8rem;
  font-size: 0.9rem;
  font-weight: 300;
  color: black;
  font-family: "Montserrat", sans-serif;
`;

export const ListElement = styled.li`
  color: black;
  margin: 0 4rem 4rem 0;
`;
