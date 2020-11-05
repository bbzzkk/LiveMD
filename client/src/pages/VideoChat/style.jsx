import styled from 'styled-components';

export default {
  Page: styled.div`
    display: flex;
    height: 100vh;
    width: 60%;
    align-items: center;
    background-color: #46516e;
    flex-direction: column;
    margin-top: 10px;
  `,

  Container: styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    max-height: 500px;
    overflow: auto;
    width: 400px;
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
    background-color: transparent;
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
    background-color: pink;
    width: 100%;
    border: none;
    height: 50px;
    border-radius: 10px;
    color: #46516e;
    font-size: 17px;
  `,

  Form: styled.form`
    width: 400px;
  `,

  // MyRow: styled.div`
  //   width: 100%;
  //   display: flex;
  //   justify-content: flex-end;
  //   margin-top: 10px;
  // `,

  MyMessage: styled.div`
    width: 45%;
    background-color: pink;
    color: #46516e;
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
    background-color: transparent;
    color: lightgray;
    border: 1px solid lightgray;
    padding: 10px;
    margin-left: 5px;
    text-align: center;
    border-top-left-radius: 10%;
    border-bottom-left-radius: 10%;
  `,
};
