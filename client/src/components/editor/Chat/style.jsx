import styled from 'styled-components';
import mStyled from '@material-ui/core/styles/styled';
import { IconButton } from '@material-ui/core';

export default {
  Chat: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    flex-direction: column;
    border-top: ${props => (props.isVideoShowed ? '2px solid #f1f3f4' : 'none')};
    padding-top: 10px;
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-bottom: 10px;
    background-color: white;
  `,

  MyMessage: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 10px;
  `,

  MyMessageBox: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    max-width: 80%;
    margin-right: 10px;
  `,

  PartnerMessage: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  `,

  PartnerMessageBox: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    max-width: 80%;
    margin-left: 10px;
  `,

  Message: styled.div`
    max-width: 70%;
    background-color: ${props => props.backColor};
    color: ${props => props.fontColor};
    text-align: left;
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    word-break: keep-all;
    word-wrap: break-word;
  `,

  ChatID: styled.div`
    padding-left: 5px;
    margin-bottom: 10px;
    font-size: 12px;
  `,

  Date: styled.div`
    margin-top: auto;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    font-size: 12px;
  `,

  Form: styled.form`
    width: 100%;
    /* height: 15%; */
    display: flex;
    flex-direction: row;
    border-top: 1px solid #f1f3f4;
  `,

  TextArea: styled.textarea`
    width: 85%;
    padding-top: 5px;
    padding-left: 5px;
    font-size: 14px;
    outline: none;
    resize: none;
    color: #9aa0a6;
    letter-spacing: 1px;
    border-radius: 3px solid #bdbdbd;
    border: none;
    ::placeholder {
      color: #9aa0a6;
    }
  `,

  Button: mStyled(IconButton)({
    width: '15%',
    outline: 'none',
    marginLeft: '5px',
    marginRight: '5px',
    color: props => props.msglen ? '#1e6896' : 'default',
  }),
};
