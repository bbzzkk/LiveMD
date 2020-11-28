import styled from 'styled-components';

export default {
  Workspace: styled.div`
    // display: 'flex';
    // background: green;
    padding : 0;
  `,

  SidebarContainer: styled.div`
    flexshrink: 0;
  `,

  MainContainer: styled.div`
    flexgrow: 1;
    margin-top: 5em;
    margin-left: 12%;
    // margin-left: min(18em, 20em);

  `,
};
