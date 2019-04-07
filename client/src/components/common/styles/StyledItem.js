import styled from "styled-components";

export const ItemCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 2rem;
`;

export const ImageWrapper = styled.div`
  height: 300px;
`;

export const Image = styled.img`
  max-height: 300px;
  max-width: 100%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  ${ItemCard}:hover & {
    opacity: 0.5;
    cursor: pointer;
    transition: opacity 0.25s;
  }
`;

export const Buttons = styled.div`
  display: none;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${ItemCard}:hover & {
    display: block;
  }
`;
