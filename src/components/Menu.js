import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import { Link } from "react-router-dom";
import { AuthContext } from "../context";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const BackGround = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(250, 250, 250, 0.8);
`;

const Modal = styled.div`
  width: 85%;
  background-color: blue;
  right: 0;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${slideIn} 0.5s ease;
  color: white;
  border-radius: 30px 0 0 30px;
  padding: 20px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  font-size: 28px;
  width: 210px;
  color: white;
  text-align: end;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Menu = ({ setMenuOpen }) => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const onMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <BackGround>
      <Modal>
        <h1>
          <span>Open Your</span>
          <br />
          <span>JIMVENTORY!</span>
        </h1>
        <MenuItem to="/my-jimventory" onClick={onMenuItemClick}>
          My Jimventory
        </MenuItem>
        {isLoggedIn ? (
          <MenuItem
            onClick={() => {
              logout();
              onMenuItemClick();
            }}
          >
            Log Out
          </MenuItem>
        ) : (
          <MenuItem to="/login" onClick={onMenuItemClick}>
            Login
          </MenuItem>
        )}
      </Modal>
    </BackGround>
  );
};

export default Menu;
