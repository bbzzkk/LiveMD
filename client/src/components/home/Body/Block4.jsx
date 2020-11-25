import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  width: 4312px;
  height: 70vh;
  margin: 0 auto;
  background-color: white;
  text-align: center;
`;

const GuideName = styled.h1`
  text-align: center;
  //font-size: 32px;
  color: white;
  font-family:
        'SF Pro KR,SF Pro Display,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif';
  //font-weight: 600;
  line-height: normal;
`;

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;
    }
`;

const ImageContainer = styled.div`
  margin: 0 16px;
  background-color: yellow;
  max-height: 100px;
`;

const Image = styled.img`
// max-width:100%;
// max-height:100%;
`;

const Block4 = () => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      lazyLoad: true,
      
    };

    return (
      <>
      <GuideName id='howTo'>가이드</GuideName>
      
      <Container
      >
        <StyledSlider {...settings}>
          <div>
            <h1>1. 구글 로그인을 진행합니다. </h1>
            <ImageContainer>
            <Image className="logo-img" src="/images/temp.jpg" alt="logo" />
            </ImageContainer>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </StyledSlider>
      </Container>
      </>
    );
  }


export default Block4;