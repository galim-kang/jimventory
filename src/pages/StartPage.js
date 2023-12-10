import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const StartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: blue;
  color: white;
`;
const SliderContainer = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  color: black;
`;

const Section = styled.section``;
const StartLink = styled(Link)`
  position: fixed;
  bottom: 20px;
  color: white;
  font-size: 20px;
  text-decoration: none;
`;
function StartPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StartPageContainer>
      <SliderContainer>
        <Slider {...settings}>
          <Section>
            <div>섹션1</div>
            <h1>제목</h1>
            <div>일러스트박스 300px*300px</div>
            <div>설명텍스트</div>
          </Section>
          <Section>
            <div>섹션2</div>
            <h1>제목</h1>
            <div>일러스트박스 300px*300px</div>
            <div>설명텍스트</div>
          </Section>
          <Section>
            <div>섹션3</div>
            <h1>제목</h1>
            <div>일러스트박스 300px*300px</div>
            <div>설명텍스트</div>
          </Section>
          <Section>
            <div>섹션4</div>
            <h1>제목</h1>
            <div>일러스트박스 300px*300px</div>
            <div>설명텍스트</div>
          </Section>
        </Slider>
      </SliderContainer>
      <h1>
        open your
        <br /> JIMVENTORY
      </h1>
      <StartLink to="/main">start</StartLink>
    </StartPageContainer>
  );
}

export default StartPage;
