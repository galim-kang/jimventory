import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "./Menu";

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: blue;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const Title = styled.h1`
  color: white;
  font-size: 34px;
  margin-left: 20px;
`;

const MenuToggle = styled.div`
  font-size: 30px;
  cursor: pointer;
  margin-right: 20px;
  color: white;
  z-index: 3;
`;

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <Title>Jimventory</Title>
      </Link>

      <MenuToggle onClick={toggleMenu}>☰</MenuToggle>
      {isMenuOpen && <Menu setMenuOpen={setMenuOpen} />}
    </HeaderContainer>
  );
};

export default Header;
