import { Container } from "../../styles/Container";
import { Text, TextContainer, Title } from "../../styles/Description";

import photo1 from "../../assets/images/gallery-01-390x620.jpg";
import photo2 from "../../assets/images/gallery-02-390x500.jpg";
import photo3 from "../../assets/images/gallery-03-390x500.jpg";
import photo4 from "../../assets/images/gallery-04-390x400.jpg";
import photo5 from "../../assets/images/gallery-05-830x520.jpg";
import { GalleryContainer, GalleryImage } from "./styled";
import { useRef } from "react";

type GalleryProps = {
  id?: string;
};

export const Gallery: React.FC<GalleryProps> = ({ id }) => {
  const ref = useRef(null);

  return (
    <Container id={id} ref={ref}>
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
