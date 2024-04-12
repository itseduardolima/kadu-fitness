import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Inner = styled(motion.div)`
  display: flex;
`;

export const Item = styled(motion.div)`
  min-height: 200px;
  min-width: 400px;
  padding: 10px;

  > img {
    width: 100%;
    border-radius: 20px;
    pointer-events: none;
    box-shadow: -2px -2px 5px rgba(17, 17, 17, 0.5),
      3px 3px 5px rgba(204, 204, 204, 0.1);
  }
`;

export const CarouselContainer = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
`;

export const Coach = styled.div`
  margin-top: 15px;
  width: 100%;
  text-align: center;
`;

export const CoachName = styled.h4`
  color: white;
`;

export const Training = styled.p`

color: var(--bg-orange);

`;
