import { Container } from "../../styles/Container";
import { Text, TextContainer, Title } from "../../styles/Description";
import GridContainer from "../Grid";

export const Classes = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Nossas aulas</Title>
        <Text>
          Oferecemos uma ampla variedade de treinos e aulas para todos. Seja
          qual for o seu objetivo, tenha certeza de que nossos treinadores têm o
          que você prefere.
        </Text>
      </TextContainer>

      <GridContainer />
      
    </Container>
  );
};
