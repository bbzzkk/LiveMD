import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Card from '@material-ui/core/Card';
import CreateButton from './CreateButton/CreateButton';

import Document from '@/components/workspace/Main/Documents/Document';
// import { documents as documentsMock } from '@/utils/Mock';
import Searching from '@/components/workspace/Main/Documents/Filtering/Searching';
import S from './style';

import { observer, inject } from 'mobx-react';

const useStyles = makeStyles(theme => ({
  document: {
    top: '10%',
    left: '10%',
  },
}));

const Documents = props => {
  const { boardStore, authStore } = props.store;

  useEffect(() => {
      boardStore.getAllDocuments(authStore.user.id);
  }, [boardStore.documents]);

  if (boardStore.documents.length === 0) {
    return (<div>No Document</div>);
  }

  return (
    <>
      <S.Container>
        <Searching />
        <S.Horizon style={{ marginTop: '5%', marginBottom: '5%' }}>
          <S.Text>Pinned</S.Text>
        </S.Horizon>
        {/* <S.DocumentContainer> */}

        <CreateButton />
        {/* <Document createdAt={Date.now()} title="hi" />
        <Document createdAt={Date.now()} title="hi" />

        <Document createdAt={Date.now()} title="hi" />
        <Document createdAt={Date.now()} title="hi" />
        <Document createdAt={Date.now()} title="hi" /> */}
        {/* </S.DocumentContainer> */}

        <S.Horizon style={{ marginTop: '5%', marginBottom: '5%' }}>
          <S.Text>Untagged</S.Text>
        </S.Horizon>
        {boardStore.documents.map((doc, index) =>
          (<Document key={index} createdAt={Date.now()} title={doc.title} docId={doc.id} />))}
        {/* <Document
          createdAt={Date.now()}
          title="hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"
        />
        <Document createdAt={Date.now()} title="hi" />
        <Document createdAt={Date.now()} title="hi" />
        <Document createdAt={Date.now()} title="hi" />

        <Document createdAt={Date.now()} title="hi" />
        <Document createdAt={Date.now()} title="hi" />
        <Document createdAt={Date.now()} title="hi" />
        <Document createdAt={Date.now()} title="hi" />
        <Document createdAt={Date.now()} title="hi" />
        <Document createdAt={Date.now()} title="hi" />
        <Document createdAt={Date.now()} title="hi" />

        <Document createdAt={Date.now()} title="hi" />
        <Document createdAt={Date.now()} title="hi" /> */}
      </S.Container>
      <Pagination style={{ marginLeft: '40%' }} count={10} />
    </>
  );

  /* <div>
        <input></input>
        <S.NewNote variant="outlined" color="primary" onClick={handleAddNote}>
          New Note
        </S.NewNote>
      </div> */

  /* {loading ? (
        <div>documents loading</div>
      ) : (
        documents.data.map(({ createdAt, title }) => {
          return <Document createdAt={createdAt} title={title} />;
        })
      )} */
  // <div>
};

export default inject('store')(observer(Documents));