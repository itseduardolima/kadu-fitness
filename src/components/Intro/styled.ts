import styled from "styled-components";
import IntroImage from "../../assets/images/bg-01.jpg";

export const StyledBanner = styled.div`
  width: 100%;
  height: 70vh;
  background-image: url(${IntroImage});
  background-size: cover;
  background-position: center;

  @media (min-width: 769px) {
    height: 100vh;
  }
`;

export const Description = styled.div`
  gap: 20px;
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  @media (max-width: 820px) {
    top: 35%;
    left: 50%;
    width: 90%;
  }

  > h1 {
    width: 60%;
    font-weight: bold;
    font-size: 2.5rem;
    color: white;
  }

  > p {
    width: 80%;
    font-size: 1.5rem;
    color: white;
  }

  > a {
    padding: 10px;
    width: 30%;
    background-color: var(--bg-orange);
    border: 1px solid transparent;
    border-radius: 20px;
    text-align: center;
    text-decoration: none;
    color: white;

    &:hover {
      background-color: var(--bg-body);
      border: 1px solid;
    }
  }

  @media (max-width: 768px) {
    > h1 {
      width: 80%;
      font-size: 1.5rem;
    }

    > p {
      width: 80%;
      font-size: 1rem;
    }
    > a {
      width: 50%;
      font-size: 1rem;
    }
  }
`;
