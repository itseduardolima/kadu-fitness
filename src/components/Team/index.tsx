import { Container } from "../../styles/Container";
import { Text, TextContainer, Title } from "../../styles/Description";
import { Carousel } from "../Carousel";

export const Team = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Conheça os membros da nossa equipe</Title>
        <Text>
          Uma equipe de treinadores qualificados, simpáticos e
          prestativos, sempre prontos para ajudá-lo a atingir seus objetivos nos
          mais diversos tipos de treinos.
        </Text>
      </TextContainer>
      <Carousel />;
    </Container>
  );
};
