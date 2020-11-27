import styled from 'styled-components';

const S = {
  container: styled.div`
    text-align: inherit;
    position: relative;
    top: 40px;

    .h3Member {
      font-weight: 600;
      font-size: 22px;
      padding-bottom: 12px;
      margin-top: 0;
      margin-bottom: 30px;
      border-bottom: 2px solid #4f4f4f;
    }

    #inputAddNewMemberLabel {
      display : block;
    }

    #inputAddNewMember {
      display: inline-block;
      width: 66.66666667%;
      margin-right: 15px;
    }

    .addNewMemberSelect{
      display: inline-block;
      width: 16.66666667%;
      padding-right : 15px;
    }
    .AddNewMemberButton{
      display: inline-block;
      width: 14%;
    }
    
    .search-user {
      height: 40px;
      font-size: 16px;
      margin-top: 2px;
    }

    #teamRoleMenu{
      width: auto;
      padding-right: 25px;
      z-index: 1;
      line-height: normal;
      margin-left: 15%;
    }

    .ListimageAndName{
      display : inline-block;
    }

    .ListDropdown{
      display : inline-block;
    }

    .col-delete {
      display : inline-block;
    }
    
    .ui-member-name {
      margin-left : 10px;
    }
    .pull-left {
      display: inline-block;
      overflow: hidden;
      width: 100%;
      text-align: left;
      text-overflow: ellipsis;
    }
  `,
};

export default S;
