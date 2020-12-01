import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const AllContainer = styled.div`
  //width: 130%;
`;
const ButtonContainer = styled.div`
  display: inline-block;
  width: 50%;
  // &:hover .Item1{
  //   border-radius: 5px;
  //   box-shadow: 0px 0px 5px #fff;
  // }
`;
const TextH1 = styled.h1`
  color: transparent;
  background: linear-gradient(to right, #005e7f, #61b6cd);
  -webkit-background-clip: text;
  font-size: 32px;
  text-align: left;
  margin-bottom: 15px;
  font-family: 'SF Pro KR,SF Pro Display,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif';
`;


const Item = styled.div`
  align-items: flex-start;
  padding: 0;
  margin-bottom: 30px;
  box-shadow: none;
  pointer-events: none;
  width: fit-content;

  // &:hover .ItemContent{
  //   display : none;
  // }
`;

const Icons = styled.img`
  display: inline-block;
  vertical-align: top;
`;

const ItemContent = styled.div`
  display: inline-block;
  margin-left: 15px;
`;

const ItemTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 7px;
  color: #a1a1a6;
  font-family: 'SF Pro KR,SF Pro Display,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif';
`;

const ItemContext = styled.div`
  font-size: 15px;
  line-height: 1.47;
  color: white;
  font-family: 'SF Pro KR,SF Pro Display,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif';
`;

const ImageContainer = styled.div`
  display: inline-block;
  width: 50%;
  position: relative;
  //right: 10%;
`;

const ImageSize = styled.img`
  width: 100%;
`;


const Block4 = () => {
  
  return (
    //전체 container
    <AllContainer
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
      data-interval="3000"
    >
      {/* button Container */}
      <ButtonContainer className="button-container">
        <TextH1>이용 방법</TextH1>
        {/* <div className="carousel-indicators"> */}
          <a
            className="carousel-control-0 "
            href="#carouselExampleControls"
            role="button"
            data-slide-to="0"
            onMouseEnter={(test) =>  console.log(test)}
          >
            <Item className="item">
              <Icons
                src="https://hackmd.io/images/home/index-team-value-03.svg"
                className="icon"
              />
              <ItemContent className="ItemContent">
                <ItemTitle className="ItemTitle">로그인</ItemTitle>
                <ItemContext className="ItemContext">
                  로그인은 구글 로그인을 통해서만 가능합니다.
                </ItemContext>
              </ItemContent>
            </Item>
          </a>

          <a
            className="carousel-control-1"
            href="#carouselExampleControls"
            role="button"
            data-slide-to="1"
          >
            <Item className="item">
              <Icons
                src="https://hackmd.io/images/home/index-value-02.svg"
                className="icon"
              />
              <ItemContent className="ItemContent">
                <ItemTitle className="ItemTitle">
                  팀 생성 / 팀 워크 스페이스 생성
                </ItemTitle>
                <ItemContext className="ItemContext">
                  팀을 생성하여 동료를 초대할 수 있고,
                  <br /> 팀 워크 스페이스 안에서 공동 문서를 생성할 수 있습니다.
                </ItemContext>
              </ItemContent>
            </Item>
          </a>

          <a
            className="carousel-control-2"
            href="#carouselExampleControls"
            role="button"
            data-slide-to="2"
          >
            <Item className="item">
              <Icons
                src="https://hackmd.io/images/home/index-value-01.svg"
                className="icon"
              />
              <ItemContent className="ItemContent">
                <ItemTitle className="ItemTitle">문서 작성</ItemTitle>
                <ItemContext className="ItemContext">
                  마크 다운을 활용하여, <br />
                  동료와 함께 문서를 작성할 수 있습니다.
                </ItemContext>
              </ItemContent>
            </Item>
          </a>

          <a
            className="carousel-control-3"
            href="#carouselExampleControls"
            role="button"
            data-slide-to="3"
          >
            <Item className="item">
              <Icons
                src="https://hackmd.io/images/home/index-team-value-01.svg"
                className="icon"
              />
              <ItemContent className="ItemContent">
                <ItemTitle className="ItemTitle">실시간 소통</ItemTitle>
                <ItemContext className="ItemContent">
                  동료들의 얼굴과 목소리를 확인할 수 있으며, <br />
                  채팅을 통해 대화도 가능합니다.
                </ItemContext>
              </ItemContent>
            </Item>
          </a>
        {/* </div> */}
      </ButtonContainer>

      {/* image Container */}
      <ImageContainer className="carousel-inner">
        <div className="carousel-item active">
          <ImageSize
            className="d-block w-100"
            src="images/login.png"
            alt="First slide"
          />
        </div>

        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="images/team.png"
            alt="Second slide"
          />
        </div>

        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="images/editor.png"
            alt="Third slide"
          />
        </div>

        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="images/RTC.png"
            alt="Fourth slide"
          />
        </div>
      </ImageContainer>
    </AllContainer>
  );
};

export default Block4;
