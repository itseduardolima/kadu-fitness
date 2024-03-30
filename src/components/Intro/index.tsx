import { Description, StyledBanner } from "./styled";

export const Intro = () => {
  return (
    <section>
      <StyledBanner />
      <Description className="description">
        <h1>TRABALHAR DURO. SENTIR-SE ORGULHOSO.</h1>
        <p>
          Junte-se hoje ao Kadu Fitness para melhorar seu bem-estar e
          transformar seu corpo e mente por meio de treinos guiados.
        </p>
        <a href="#classes">Nossas Aulas</a>
      </Description>
    </section>
  );
};
