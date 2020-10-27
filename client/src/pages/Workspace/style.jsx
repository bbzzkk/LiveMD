import styled from 'styled-components';

export default {
  Workspace: styled.div`
    display: 'flex';
  `,

  SidebarContainer: styled.div`
    flexshrink: 0;
  `,

  MainContainer: styled.div`
    flexgrow: 1;
    margin-top: 7em;
    margin-left: min(15em, 14em);
    flexgrow: 1;
  `,
};
