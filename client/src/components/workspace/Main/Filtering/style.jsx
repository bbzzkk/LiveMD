import styled from 'styled-components';
/* 
 @import url(https://fonts.googleapis.com/css?family=Open+Sans);

  body{
    background: #f2f2f2;
    font-family: 'Open Sans', sans-serif;
  }
  
  .search {
    width: 150%;
    position: relative;
    display: flex;
  }
  
  .searchTerm {
    width: 100%;
    border: 3px solid #1e6896;
    border-right: none;
    padding: 5px;
    height: 20px;
    border-radius: 20px 0 0 20px;
    outline: none;
    color: #9DBFAF;
  }
  
  .searchTerm:focus{
    color: grey;
  }
  
  .searchButton {
    width: 40px;
    height: 36px;
    border: 1px solid #1e6896;
    background: #1e6896;
    text-align: center;
    color: #fff;
    border-radius: 0 20px 20px 0;
    cursor: pointer;
    font-size: 20px;
  }
  
  Resize the wrap to see the search bar change!
  .wrap{
    width: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  */
const S = {
  Container: styled.div`
    width: 80%;
    position: relative;
    display: flex;
    justify-content: space-between;
  `,
  Searchbox: styled.input`
    // width: 15%;
    border: 3px solid #1e6896;
    border-right: none;
    padding: 5px;
    // height: 20%;
    border-radius: 20px 0 0 20px;
    outline: none;
    color: grey;
  `,
  Searchbutton: styled.button`
    // width: 4%;
    // height: 46%;
    border: 1px solid #1e6896;
    background: #1e6896;
    text-align: center;
    color: #fff;
    border-radius: 0 20px 20px 0;
    cursor: pointer;
    font-size: 20px;
  `,
  SearchContainer: styled.div`
    display: flex;
  `,
};

export default S;
