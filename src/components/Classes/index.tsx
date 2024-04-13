import { useRef } from "react";
import { Container } from "../../styles/Container";
import { Text, TextContainer, Title } from "../../styles/Description";
import GridContainer from "../Grid";

type ClassesProps = {
  id?: string;
};

export const Classes: React.FC<ClassesProps> = ({ id }) => {

  const ref = useRef(null);

  return (
    <Container id={id} ref={ref}>
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
