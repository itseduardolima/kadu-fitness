import { useRef } from "react";
import { Container } from "../../styles/Container";
import { Text, TextContainer, Title } from "../../styles/Description";
import { Carousel } from "../Carousel";

type TeamProps = {
  id?: string;
};

export const Team: React.FC<TeamProps> = ({ id }) => {
  const ref = useRef(null);

  return (
    <Container id={id} ref={ref}>
      <TextContainer>
        <Title>Conheça os membros da nossa equipe</Title>
        <Text>
          Uma equipe de treinadores qualificados, simpáticos e prestativos,
          sempre prontos para ajudá-lo a atingir seus objetivos nos mais
          diversos tipos de treinos.
        </Text>
      </TextContainer>
      <Carousel />;
    </Container>
  );
};
