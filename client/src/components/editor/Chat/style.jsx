import styled from 'styled-components';

export default {
  Chat: styled.div`
    display: ${(props) => props.isChatShowed ? 'flex' : 'none'}; 
    width: 100%;
    height: 100%;
    align-items: center;
    flex-direction: column;
    border-top: 1px solid #F1F1F1;
    padding-top: 10px;
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: white;
    overflow: auto;
    padding-bottom: 10px;
    
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
    background-color: #F1F1F1;
    text-align: left;
    padding: 10px;
    border-radius: 5px;
    word-break: keep-all;
    word-wrap: break-word;
  `,

  ChatID: styled.div`
    padding-left: 5px;
    margin-bottom: 5px;
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
    height: 15%;
    display: flex;
    flex-direction: row;
  `,

  TextArea: styled.textarea`
    width: 85%;
    padding-top: 5px;
    padding-left: 5px;
    font-size: 14px;
    background-color: #263238;
    outline: none;
    resize: none;
    color: lightgray;
    letter-spacing: 1px;
    ::placeholder {
      color: lightgray;
    }
  `,

  Button: styled.button`
    background-color: #B0BEC5;
    width: 15%;
    outline: none;
    color: #46516e;
  `,
};
