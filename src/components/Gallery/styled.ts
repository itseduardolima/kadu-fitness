import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(250px, 1fr));
  gap: 10px;
  padding: 0 15px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }

  @media (min-width: 998px) {
    padding: 0 10rem;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }
`;

export const GalleryImage = styled.img`
  cursor: pointer;
  border-radius: 8px;
  display: inline-block;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 998px) {
    width: 100%;
  }
`;
