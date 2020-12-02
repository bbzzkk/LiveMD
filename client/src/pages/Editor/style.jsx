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
    box-shadow: 10px 0px 6px #1e2126;
  `,

  PageName: styled.input`
    font-family: 'Nanum Gothic', sans-serif;
    background-color: #f1f1f1;
    border: none;
    height: 40px;
    width: fit-content;
    min-width: 11rem;
    font-size: 28px;
    padding-left: 30px;
    margin-right: 10px;
    overflow : auto;
    :focus {
      outline: none;
    }
  `,

  EditBtnGroup: styled.div`
    min-width: 9rem;
  `,

  VideoAndChatBtnGroup: styled.div`
    margin-left: auto;
    margin-right: 50px;
    min-width: 14rem;
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
    /* border-left: 3px solid #f1f1f1; */
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
