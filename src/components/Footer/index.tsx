import { useRef } from "react";
import {
  FooterColumn,
  FooterContact,
  FooterContainer,
  FooterGrid,
  FooterText,
  FooterTitle,
  SocialMedia,
} from "./styled";

type ContactProps = {
  id?: string;
};

const Footer: React.FC<ContactProps> = ({ id }) => {
  const ref = useRef(null);

  return (
    <FooterContainer id={id} ref={ref}>
      <FooterGrid>
        <FooterColumn>
          <FooterTitle>Saiba mais sobre nós</FooterTitle>
          <p>
            Obtenha seu orçamento <br /> ou ligue: +1 (800) 756-32-56
          </p>
          <a href="#">Agendar uma aula</a>
        </FooterColumn>
        <FooterColumn>
          <h4>Contate-nos</h4>
          <FooterContact>
            <p className="footer-phone-link">+1 (800) 756-32-56</p>
            <p className="footer-mail-link">mail@demolink.org</p>
          </FooterContact>
          <FooterText>
            2099 Walnut Hill Ln <br /> Lafayette, CA 55262
          </FooterText>
        </FooterColumn>
        <FooterColumn>
          <h4>Redes Sociais</h4>
          <SocialMedia>
            <i className="lab la-twitter"></i>
            <i className="lab la-instagram"></i>
            <i className="lab la-facebook"></i>
            <i className="lab la-telegram"></i>
          </SocialMedia>
        </FooterColumn>
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;
