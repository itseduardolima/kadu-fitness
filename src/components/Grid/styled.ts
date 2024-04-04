import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 50px;
  padding: 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px;
  }

  @media (min-width: 998px) {
    padding: 70px 150px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  max-width: 24.375rem;
  min-height: 100%;
  margin: 0 auto;
  position: relative;
  border-radius: 10px;
  z-index: 0;
  box-shadow: -5px -5px 10px rgba(17, 17, 17, 0.5),
    5px 5px 10px rgba(204, 204, 204, 0.1);
  overflow: hidden;
`;

export const CardImage = styled.img`
  display: inline-block;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  filter: grayscale(100%);
  transition: all 0.2s linear;

  &:hover {
    filter: grayscale(0%);
  }
`;

export const CardDescription = styled.div`
  margin-top: 20px;
  padding: 0 1.5rem;
`;

export const CardTitle = styled.h4`
  color: var(--bg-title);
  font-size: 23px;
  line-height: 1.15;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const CardText = styled.p`
  margin-top: 10px;
  color: var(--bg-text);
  font-size: 15px;

  @media (min-width: 768px) {
    font-size: 12px;
  }
`;
