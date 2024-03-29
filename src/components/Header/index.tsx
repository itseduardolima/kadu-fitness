import { useState } from "react";
import { Navbar } from "react-bootstrap";
import { StyledNavbar, StyledBrand, StyledLink, BurguerButton, BtnContainer, StyledNav } from "./styled";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <StyledNavbar expand="lg">
      <StyledBrand to="/">
       Kadu <span>Fit</span>ness
      </StyledBrand>

      <BtnContainer>
        <BurguerButton
          className="custom-toggle-btn"
          onClick={() => setExpanded(!expanded)}
        />
     
      </BtnContainer>

      <Navbar.Collapse id="basic-navbar-nav">
        <StyledNav className="ml-auto" style={{ width: "100px" }}>
          <StyledLink href="#menu">Menu</StyledLink>
          <StyledLink href="#about">Sobre</StyledLink>
          <StyledLink href="#classes">Aulas</StyledLink>
          <StyledLink href="#schedule">Agendar</StyledLink>
          <StyledLink href="#team">Time</StyledLink>
          <StyledLink href="#gallery">Galeria</StyledLink>
          <StyledLink href="#contact">Contato</StyledLink>
        </StyledNav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default Header;