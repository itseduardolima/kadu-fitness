import { useRef } from "react";
import { Container } from "../../styles/Container";
import { Title } from "../../styles/Description";
import styled from "styled-components";

type AboutProps = {
  id?: string;
};

const TextContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  margin: auto;
  gap: 10px;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const Text = styled.p`
  text-align: center;
  font-size: 18px;
  color: var(--bg-text);
`;

export const About: React.FC<AboutProps> = ({ id }) => {
  const ref = useRef(null);

  return (
    <Container id={id} ref={ref}>
      <TextContainer>
        <Title>Sobre nós</Title>
        <Text>
          Oferecemos um ambiente relaxante e aberto para atividades físicas e de
          bem-estar para todos que se preocupam com seu bem-estar.
        </Text>
        <Text>
          Nosso centro dá boas-vindas a todos os níveis de habilidade e faixas
          etárias e acreditamos que nossa atmosfera amigável nos diferencia como
          algo especial no mundo do treinamento físico. Quer você seja velho ou
          jovem, esperamos ter algo que o empolgue.
        </Text>
      </TextContainer>
    </Container>
  );
};
