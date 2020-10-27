import React from 'react'

import Document from '@/components/workspace/Main/Documents/Document';
import { documents } from '@/utils/Mock';

import S from './style'

const Documents = () => {
  const handleAddNote = () => {
    console.log('add new note');
  };
  return (
    <>
    <div>
    <input></input>
    <S.NewNote variant="outlined" color="primary" onClick={handleAddNote}>
          New Note
        </S.NewNote>
    </div>
    <div>
    {documents.data.map(({createdAt, title }) => {
            return (
              <Document createdAt={createdAt} title={title} />
            );
          })}
    </div>
    </>
  )
  
}

export default Documents;