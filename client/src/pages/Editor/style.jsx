import styled from 'styled-components';

export default {
  EditorContainer: styled.div`
    display: flex;
    width: 100%;
    min-width: 1366px;
    height: 100%;
    flex-direction: column;
    position: absolute;
  `,
  Header: styled.div`
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #f1f1f1;
  `,
  PageName: styled.input`
    background-color: #f1f1f1;
    border: none;
    height: 40px;
    width: 180px;
    font-size: 28px;
    padding-left: 30px;
    margin-right: 10px;
    :focus {
      outline: none;
    }
  `,
  EditBtnGroup: styled.div``,
  VideoAndChatBtnGroup: styled.div`
    margin-left: auto;
    margin-right: 50px;
  `,
  Body: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    position: relative;
    overflow: hidden;
  `,
  VideoAndChatDiv: styled.div`
    /* display: ${props =>
      props.isChatShowed || props.isVideoShowed ? 'flex' : 'none'}; */
    display: flex;
    flex-direction: column;
    width: 20%;
    border-left: 1px solid #f1f1f1;
  `,
  VideoDiv: styled.div`
    margin-bottom: auto;
    height: 50%;
  `,
  ChatDiv: styled.div`
    margin-top: auto;
    height: 50%;
  `,
};
