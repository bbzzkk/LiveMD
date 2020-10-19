import styled from 'styled-components';

export default {
  Header: styled.div`
    width: 100%;
    height: 70px;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #333;

    .logo-img {
      margin-left: 45px;
      padding-top: 15px;
      width: 130px;
      height: 30px;
    }

    .sign-in {
      text-decoration: none;
      padding-top: 12px;
      margin-right: 100px;
      font-size: 18px;
      font-weight: bold;
      color: white;
    }
  `,
};
