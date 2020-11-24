import styled from 'styled-components';

export default {
  Page: styled.div`
    display: flex;
    height: 70vh;
    width: 100%;
    align-items: center;
    // background-color: #46516e;
    //background-color: #37474F;
    flex-direction: column;
    margin-top: 10px;
  `,

  Container: styled.div`
    background-color: #37474F;
    display: flex;
    flex-direction: column;
    height: 700px;
    max-height: 700px;
    overflow: auto;
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding-bottom: 10px;
    margin-top: 0px;
  `,

  TextArea: styled.textarea`
    width: 98%;
    height: 100px;
    border-radius: 10px;
    margin-top: 10px;
    padding-left: 10px;
    padding-top: 10px;
    font-size: 17px;
    //background-color: transparent;
    background-color: #263238;
    border: 1px solid lightgray;
    outline: none;
    color: lightgray;
    letter-spacing: 1px;
    line-height: 20px;
    ::placeholder {
      color: lightgray;
    }
  `,

  Button: styled.button`
    //background-color: pink;
    background-color: #B0BEC5;
    width: 100%;
    border: none;
    height: 50px;
    border-radius: 10px;
    color: #46516e;
    font-size: 17px;
  `,

  Form: styled.form`
    width: 100%;
  `,

  // MyRow: styled.div`
  //   width: 100%;
  //   display: flex;
  //   justify-content: flex-end;
  //   margin-top: 10px;
  // `,

  MyMessage: styled.div`
    width: 45%;
    // background-color: pink;
    background-color: #ECEFF1
    //color: #46516e;
    color: pink;
    padding: 10px;
    margin-right: 5px;
    text-align: center;
    border-top-right-radius: 10%;
    border-bottom-right-radius: 10%;
  `,

  // PartnerRow: styled(MyRow)`
  //   justify-content: flex-start;
  // `,
  // 77번째 줄에서 오류 발생. MyRow를 못 읽어옴. 이유는 모름. 그래서 MyRow와 PartnerRow는 Chat.jsx로 따로 빼놓음.
  PartnerMessage: styled.div`
    width: 45%;
    //background-color: transparent;
    background-color: white;
    color: black;
    border: 1px solid lightgray;
    padding: 10px;
    margin-left: 5px;
    text-align: center;
    border-top-left-radius: 10%;
    border-bottom-left-radius: 10%;
  `,
};
