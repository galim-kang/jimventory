import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background-color: #f8f9fa;
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const Copyright = styled.p`
  color: #333;
  font-size: 14px;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <Copyright>© {year} Jimventory</Copyright>
    </FooterContainer>
  );
};

export default Footer;
