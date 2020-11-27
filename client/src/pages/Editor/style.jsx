import styled from 'styled-components';

export default {
  EditorContainer: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    position: absolute;

    button {
      text-transform: none;
      outline: none;
    }
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

  ActiveDiv: styled.div`
    display: ${props => (props.active ? 'block' : 'none')};
    position: absolute;
    right: 0;
    margin-right: 50px;
    z-index: 9999;
    background-color: #f1f1f1;
  `,

  Body: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    position: relative;
    overflow: hidden;
  `,

  CodeMirrorContainer: styled.div`
    width: ${props => (props.isVideoAndChatDivShowed ? '80%' : '100%')};
  `,

  VideoAndChatDiv: styled.div`
    display: ${props => (props.isVideoAndChatDivShowed ? 'flex' : 'none')};
    flex-direction: column;
    width: 20%;
    border-left: 5px solid #f1f1f1;
  `,

  VideoDiv: styled.div`
    display: ${props => (props.isVideoShowed ? 'block' : 'none')};
    height: ${props => (props.isChatShowed ? '50%' : '100%')};
    margin-bottom: auto;
  `,

  ChatDiv: styled.div`
    display: ${props => (props.isChatShowed ? 'block' : 'none')};
    height: ${props => (props.isVideoShowed ? '50%' : '100%')};
    margin-top: auto;
  `,
};
