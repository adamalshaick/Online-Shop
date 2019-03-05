import styled from "styled-components";

export const StyledNavbar = styled.header`
  width: 100%;
  box-shadow: 0px 8px 20px 0px rgba(204, 204, 204, 0.7);
  background-color: white;
  display: flex;
  @media (min-width: 768px) {
    height: 5rem;
  }
`;

export const List = styled.ul`
  margin-top: 1.8rem;
  font-size: 0.9rem;
  font-weight: 300;
  color: black;
  font-family: "Montserrat", sans-serif;
  @media (min-width: 768px) {
    display: flex;
    position: absolute;
    right: 50%;
    transform: translateX(50%);
  }
`;

export const ListElement = styled.li`
  color: black;
  margin: 0 2rem 2rem 0;
  @media (min-width: 768px) {
    margin: 0 4rem 4rem 0;
  }
`;
