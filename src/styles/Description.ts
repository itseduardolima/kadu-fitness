import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  margin: auto;
  gap: 10px;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: var(--bg-title);

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 18px;
  color: var(--bg-text);
`;
