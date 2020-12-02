import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Pagination from '@material-ui/lab/Pagination';
import Card from '@material-ui/core/Card';

import Document from '@/components/workspace/Main/Documents/Document';
// import { documents as documentsMock } from '@/utils/Mock';
import S from './style';

import { observer, inject } from 'mobx-react';

const useStyles = makeStyles(theme => ({
  document: {
    top: '10%',
    left: '10%',
  },
}));

const Documents = props => {
  const { boardStore, authStore, teamStore } = props.store;

  // useEffect(() => {
  // console.log('Documents useEffect 실행');
  // console.log(props.match);
  // if (props.match === undefined) {
  //   boardStore.getAllDocuments(authStore.user.id);
  // } else {
  //   const teamname = props.match.params;
  //   const team = teamStore.getOneTeam(teamname);
  //   console.log(team);
  //   boardStore.getAllDocuments(team.teamId);
  // }
  // }, [boardStore.documents]);

  return (
    <>
      <S.Container>
        <S.Horizon style={{ marginTop: '5%', marginBottom: '5%' }}>
          <S.Text>Pinned</S.Text>
        </S.Horizon>
        <S.Horizon style={{ marginTop: '5%', marginBottom: '5%' }}>
          <S.Text>Untagged</S.Text>
        </S.Horizon>
        {boardStore.documents.map((doc, index) => {
          return <Document key={index} document={doc} />;
        })}
      </S.Container>
      {/* <Pagination style={{ marginLeft: '40%' }} count={10} /> */}
    </>
  );
};

export default inject('store')(observer(Documents));
