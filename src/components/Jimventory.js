import styled, { keyframes } from "styled-components";
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease;
  z-index: 1;
`;
const Wrapper = styled.div`
  display: flex;
  width: 300px;
  justify-content: start;
`;
const Icon = styled.div`
  width: 80px;
  height: 80px;
  background-color: grey;
  margin-right: 20px;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 22px;
`;

const Description = styled.p`
  margin: 0;
  font-size: 16px;
`;
const BookNow = styled(Link)`
  display: inline-block;
  margin: 10px 0;
  width: 300px;
  padding: 8px 0;
  cursor: pointer;
  background-color: blue;
  color: white;
  font-size: 24px;
  text-align: center;
  text-decoration: none;
`;
const Jimventory = ({ selectedItem, setSelectedItem }) => {
  const containerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setSelectedItem(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSelectedItem]);

  if (!selectedItem) return null;

  const { operatingTime, serviceName, storeType } = selectedItem;

  return (
    <Container ref={containerRef}>
      <Wrapper>
        <Icon />
        <div>
          <Description>
            {operatingTime[0]} - {operatingTime[1]}
          </Description>
          <Title>{serviceName}</Title>
          <Description>{storeType}</Description>
        </div>
      </Wrapper>
      <BookNow to={`/booking/${selectedItem.id}`}>Book Now!</BookNow>
    </Container>
  );
};

export default Jimventory;
