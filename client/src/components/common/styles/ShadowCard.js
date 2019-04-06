import styled from "styled-components";

export const ShadowCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 2rem;
`;

export const Hover = styled.div`
  &:hover {
    filter: brightness(90%);
    cursor: pointer;
    transition: filter 0.5s;
  }
`;
