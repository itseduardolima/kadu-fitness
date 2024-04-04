import { Card, CardDescription, CardImage, CardText, CardTitle, Container } from "./styled";
import { servicesData } from '../../utils/Array/Classes';

const GridContainer = () => {
  return (
    <Container>
      {servicesData.map((service, index) => (
        <Card key={index}>
          <CardImage src={service.image} alt="Service" />
          <CardDescription>
            <CardTitle>{service.title}</CardTitle>
            <CardText>{service.description}</CardText>
          </CardDescription>
        </Card>
      ))}
    </Container>
  );
};

export default GridContainer;
