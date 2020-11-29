import styled from 'styled-components';

export default {
  TeamSettingsContainer: styled.div`
    display: flex;
    flex-direction: column;
    /* margin-top: 7rem;
    margin-left: 10rem;
    margin-right: 10rem; */
    text-align: inherit;
    position: relative;
    top: 40px;

    h2, h3 {
      flex: 1;
      border-bottom: 2px solid black;
      margin-top: 0;
      padding-bottom: 1.0rem;
      font-weight: 600;
      font-size: 22px;
    }

    button {
      text-transform: none;
      outline: none;
    }

    label {
      font-size: 1.0rem;
      line-height: 1.25rem;
      margin-bottom: 10px;
    }

    input {
      /* font-size: 1.25rem; */
      margin-top: 0;
      flex: 1;
      padding-left: 0.5rem;
    }

    .settings {
      display: inline-flex;
      flex-direction: row;
      /* margin-bottom: 2.0rem; */
    }

    .input-container {
      width: 66.66666667%;
    }

    .picture-container {
      margin-left: 6rem; 
      margin-top: 5.5rem;
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
      font-size: 1.2rem;
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
      margin-top: 2rem;
      align-items: center;
    }

    .leave-team > label {
      font-size: 1.25rem;
      font-weight: 300;
      /* margin-right: 6rem; */
      margin-top: 0;
      margin-bottom: 0;
      margin-right: 15%;
    }
  `,

};
