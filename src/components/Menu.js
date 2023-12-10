import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context";

const MenuBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f8f9fa;
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled.div`
  cursor: pointer;
`;

const Menu = ({ setMenuOpen }) => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const onMenuItemClick = (path) => {
    setMenuOpen(false);
    // 페이지 이동 로직 작성
  };

  return (
    <MenuBar>
      <MenuItem onClick={() => onMenuItemClick("/content1")}>
        <Link to="/content1">Content1</Link>
      </MenuItem>
      <MenuItem onClick={() => onMenuItemClick("/content2")}>
        <Link to="/content2">Content2</Link>
      </MenuItem>
      <MenuItem onClick={() => onMenuItemClick("/content3")}>
        <Link to="/content3">Content3</Link>
      </MenuItem>
      <MenuItem onClick={() => onMenuItemClick("/content4")}>
        <Link to="/content4">Content4</Link>
      </MenuItem>
    </MenuBar>
  );
};

export default Menu;
