import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--bg-dark);
  color: #fff;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  padding: 50px 15px;

  @media (min-width: 768px) {
    padding: 5rem 0rem 5rem 5rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 998px) {
    padding: 10rem 0rem 10rem 15rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;

  > h4 {
    font-size: 22px;
    line-height: 1.15;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  > p {
    font-size: 1.125rem;
    font-weight: 500;
    color: var(--bg-text);
  }

  a {
    padding: 10px;
    width: 70%;
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
`;

export const FooterTitle = styled.h2`
  font-size: 32px;
  line-height: 1.15;
`;

export const FooterText = styled.p`
  font-size: 14px;
  color: var(--bg-text);
`;

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;

  .footer-phone-link,
  .footer-mail-link {
    color: var(--bg-text);
    cursor: pointer;
    display: inline-block;
    font-weight: 500;

    &:hover {
      color: var(--bg-orange);
    }
  }
  .footer-phone-link {
    font-size: 1.5rem;
  }
`;

export const SocialMedia = styled.div`
  .lab {
    font-size: 25px;
    cursor: pointer;
    width: 35px;
    color: var(--bg-text);
  }
`;
