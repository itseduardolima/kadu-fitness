import { Container } from "../../styles/Container";
import { Text, TextContainer, Title } from "../../styles/Description";
import styled from "styled-components";

import photo1 from "../../assets/images/gallery-01-390x620.jpg";
import photo2 from "../../assets/images/gallery-02-390x500.jpg";
import photo3 from "../../assets/images/gallery-03-390x500.jpg";
import photo4 from "../../assets/images/gallery-04-390x400.jpg";
import photo5 from "../../assets/images/gallery-05-830x520.jpg";

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(250px, 1fr));
  gap: 10px;
  padding: 0 10px;

  @media (min-width: 998px) {
    padding: 0 10rem;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }
`;

const GalleryImage = styled.img`
  cursor: pointer;
  border-radius: 8px;
  display: inline-block;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Gallery = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Nossa galeria</Title>
        <Text>
          Confira os melhores momentos dos treinos. Em nossa galeria também
          publicamos regularmente fotos de eventos realizados em nossa academia.
        </Text>
      </TextContainer>
      <GalleryContainer>
        <GalleryImage src={photo1} alt="Photo 1" />
        <GalleryImage src={photo2} alt="Photo 2" />
        <GalleryImage src={photo3} alt="Photo 3" />
        <GalleryImage src={photo4} alt="Photo 4" />
        <GalleryImage src={photo5} alt="Photo 5" />
      </GalleryContainer>
    </Container>
  );
};
