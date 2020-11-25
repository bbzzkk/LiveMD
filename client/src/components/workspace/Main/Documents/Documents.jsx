import React, { useState, useEffect } from 'react';

import Document from '@/components/workspace/Main/Documents/Document';
// import { documents as documentsMock } from '@/utils/Mock';

import S from './style';

const Documents = () => {
  //  const [documents, setDocuments] = useState(documentsMock);
  const [documents, setDocuments] = useState('');
  const [loading, setloading] = useState(false);
  const handleAddNote = () => {
    console.log('add new note');
  };

  // const fetchDocuments = async () => {
  //   setloading(true);
  //   const res = await fetch(
  //     'http://ec2-15-164-233-188.ap-northeast-2.compute.amazonaws.com:8080/api/v1/user-documents/list',
  //   );
  //   const documents = await res.json();
  //   console.log(documents);
  //   setloading(false);
  // };

  useEffect(() => {
    console.log('documents 새롭게 렌더링', documents);
  }, [documents]);

  // useEffect(() => {
  //   fetchDocuments();
  // }, []);

  return (
    // <>
    <Document createdAt={Date.now()} title="hi" />
    /* {loading ? (
        <div>documents loading</div>
      ) : (
        documents.data.map(({ createdAt, title }) => {
          return <Document createdAt={createdAt} title={title} />;
        })
      )} */
    // </>
  );
  {
    /* <div>
        <input></input>
        <S.NewNote variant="outlined" color="primary" onClick={handleAddNote}>
          New Note
        </S.NewNote>
      </div> */
  }
  // <div>
};

export default Documents;
