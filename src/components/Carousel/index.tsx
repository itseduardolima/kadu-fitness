import { useEffect, useRef, useState } from "react";
import { CarouselContainer, Coach, CoachName, Container, Inner, Item, Training } from "./styled";
import { team } from "../../utils/Array/Team";

export const Carousel = () => {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        const newWidth =
          carousel.current.scrollWidth - carousel.current.offsetWidth;
        setWidth(newWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <Container>
      <CarouselContainer ref={carousel}>
        <Inner
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 5 }}
          transition={{ duration: 0.8 }}
        >
          {team.map((coach, index) => (
            <Item key={index}>
              <img src={coach.image} alt="Texto alt" />
              <Coach>
                <CoachName>{coach.name}</CoachName>
                <Training>{coach.training}</Training>
              </Coach>
            </Item>
          ))}
        </Inner>
      </CarouselContainer>
    </Container>
  );
};
