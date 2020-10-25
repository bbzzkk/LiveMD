import styled from 'styled-components';

export default {
  Workspace: styled.div`
    display: 'flex';
  `,

  SidebarContainer: styled.div`
    width: 20%;
    flexshrink: 0;
  `,

  Content: styled.div`
    flexGrow: 1,
    width: 80%;
    padding: theme.spacing(3),
  `,
};
