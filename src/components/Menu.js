import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context";
import Jimventory from "./Jimventory";

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

  const navigate = useNavigate();
  return (
    <MenuBar>
      <MenuItem onClick={() => navigate('/landing')}>
        landing
      </MenuItem>
      <MenuItem onClick={() => navigate('/main')}>
        map
      </MenuItem>
      <MenuItem onClick={() => navigate('/my-jimventory')}>
      jimventory
      </MenuItem>
      <MenuItem onClick={() => navigate('/myPage')}>
        mypage
      </MenuItem>
    </MenuBar>
  );
};

export default Menu;
