import styled from 'styled-components';

export default {
  RoomContainer: styled.div`
    display: ${(props) => props.isVideoShowed ? 'flex' : 'none'}; 
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: auto;
  `,

  VideoControlBtnDiv: styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
  `,

  VideoContent: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `,

  VideoWrapper: styled.div`
    position: relative;
    padding-bottom: 56.25%;
    width: 100%;
    background: black;
  `,

  StyledVideo: styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,

  UserName: styled.div`
    position: relative;
    margin-top: -20px;
    padding-left: 10px;
    padding-right: 10px;
    width: fit-content;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background: black;
  `,
};
