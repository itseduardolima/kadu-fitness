import { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import {
  StyledNavbar,
  StyledBrand,
  StyledLink,
  BurguerButton,
  StyledNav,
} from "./styled";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <StyledNavbar expand="lg" scrolled={scrolled}>
      <StyledBrand href="#home">
        Kadu <span>Fit</span>ness
      </StyledBrand>

      <BurguerButton
        className="custom-toggle-btn"
        onClick={() => setExpanded(!expanded)}
      />

      <Navbar.Collapse id="basic-navbar-nav">
        <StyledNav >
          <StyledLink href="#about">Sobre</StyledLink>
          <StyledLink href="#classes">Aulas</StyledLink>
          <StyledLink href="#team">Time</StyledLink>
          <StyledLink href="#gallery">Galeria</StyledLink>
          <StyledLink href="#contact">Contato</StyledLink>
        </StyledNav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default Header;
