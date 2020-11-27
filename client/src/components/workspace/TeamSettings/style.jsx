import styled from 'styled-components';

export default {
  TeamSettingsContainer: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 7rem;
    margin-left: 10rem;
    margin-right: 10rem;

    h2, h3 {
      flex: 1;
      border-bottom: 2px solid black;
      margin-top: 0;
      padding-bottom: 1.0rem;
      font-weight: 600;
    }

    button {
      text-transform: none;
      outline: none;
    }

    label {
      font-size: 1.5rem;
      line-height: 1.25rem;
      margin-bottom: 1.5rem;
    }

    input {
      font-size: 1.25rem;
      margin-top: 0;
      flex: 1;
      padding-left: 0.5rem;
    }

    .settings {
      display: flex;
      flex-direction: row;
      margin-bottom: 2.5rem;
    }

    .input-container {
      width: 65%;
    }

    .picture-container {
      margin-left: auto; 
      margin-top: 7rem;
      display: flex;
      flex-direction: column;
    }

    .input-form {
      display: flex;
      flex-direction: column;
      margin-top: 3.5rem;
    }

    .url-path {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    #url-pre-path {
      font-size: 1.25rem;
      margin-right: 0.75rem;
      margin-top: 0;
      margin-bottom: 0;
    }

    .pull-right {
      margin-left: auto;
      margin-top: 0.25rem;
    }

    .team-thumbnail {
      width: 15rem;
      height: 10rem;
      margin-bottom: 1rem;
    }

    .logo-btn {
      margin-bottom: 1rem;
    }

    #save-btn {
      margin-right: auto;
      margin-bottom: 5rem;
      background-color: #1e6896;
      color: white;
    }

    .leave-team {
      display: flex;
      flex-direction: row;
      margin-top: 3rem;
      align-items: center;
    }

    .leave-team > label {
      font-size: 1.25rem;
      font-weight: 300;
      margin-right: 6rem;
      margin-top: 0;
      margin-bottom: 0;
    }
  `,

};
