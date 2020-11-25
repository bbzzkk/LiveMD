import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Chat, CodeMirror, Room } from '@/components/editor';
import S from './style';

const Editor = ({ doc, match }) => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [docText, setDocText] = useState('');
  const pageName = match.params.page;
  const roomName = doc ? null : pageName;
  const defaultValue = doc
    ? `loading ${pageName}...`
    : `syncing with ${pageName}...`;
  const docs = null;

  const [docName, setDocName] = useState(pageName);
  const [isVideoShowed, setVideoShowed] = useState(true);
  const [isChatShowed, setChatShowed] = useState(true);
  const [isVideoAndChatDivShowed, setVideoAndChatDivShowed] = useState(true);
  const [editorRatio, setEditorRatio] = useState({ edit: 1, preview: 1 });
  const [activeBtnClick, setActiveBtnClick] = useState(false);

  useEffect(() => {
    if (doc) {
      loadDoc(match.params.page);
    }
  }, [match]);

  const loadDoc = async pageName => {
    const mdFileName = docs[pageName];
    if (!mdFileName) {
      setDocText(`There is no document named '${pageName}'`);
      return;
    }
    setDocText(`loading ${pageName}...`);
    const res = await window.fetch(mdFileName);
    const text = await res.text();
    setDocText(text);
  };

  const handleActiveUserDisp = users => {
    setActiveUsers(users);
  };

  const videoShowAndHide = () => {
    if (isVideoShowed) {
      setVideoShowed(false);
      if (!isChatShowed) setVideoAndChatDivShowed(false);
    } else {
      setVideoShowed(true);
      setVideoAndChatDivShowed(true);
    }
  };

  const chatShowAndHide = () => {
    if (isChatShowed) {
      setChatShowed(false);
      if (!isVideoShowed) setVideoAndChatDivShowed(false);
    } else {
      setChatShowed(true);
      setVideoAndChatDivShowed(true);
    }
  };

  const handleRatio = (edit, preview) => {
    setEditorRatio({ ...editorRatio, edit: edit, preview: preview });
  };

  return (
    <S.EditorContainer>
      <S.Header>
        <S.PageName
          value={docName}
          onChange={e => setDocName(e.target.value)}
        />
        <S.EditBtnGroup>
          <button onClick={() => handleRatio(2, 0)}>edit</button>
          <button onClick={() => handleRatio(1, 1)}>both</button>
          <button onClick={() => handleRatio(0, 2)}>view</button>
        </S.EditBtnGroup>
        <S.VideoAndChatBtnGroup>
          <button onClick={videoShowAndHide}>
            {isVideoShowed ? 'Hide Video' : 'Show Video'}
          </button>
          <button onClick={chatShowAndHide}>
            {isChatShowed ? 'Hide Chat' : 'Show Chat'}
          </button>
          <button
            onClick={() => setActiveBtnClick(!activeBtnClick)}
          >{`ONLINE: ${activeUsers.length}`}</button>
          <S.ActiveDiv active={activeBtnClick}>
            <ul>
              {activeUsers.map(user => (
                <li>{user}</li>
              ))}
            </ul>
          </S.ActiveDiv>
        </S.VideoAndChatBtnGroup>
      </S.Header>
      <S.Body>
        <S.CodeMirrorContainer
          isVideoAndChatDivShowed={isVideoAndChatDivShowed}
        >
          <CodeMirror
            key={`page/${pageName}`}
            roomName={roomName}
            defaultValue={defaultValue}
            value={docText}
            heightMargin={60}
            onActiveUser={handleActiveUserDisp}
            isVideoAndChatDivShowed={isVideoAndChatDivShowed}
            editorRatio={editorRatio}
          />
        </S.CodeMirrorContainer>
        <S.VideoAndChatDiv isVideoAndChatDivShowed={isVideoAndChatDivShowed}>
          <S.VideoDiv>
            <Room isVideoShowed={isVideoShowed} />
          </S.VideoDiv>
          <S.ChatDiv>
            <Chat isChatShowed={isChatShowed} />
          </S.ChatDiv>
        </S.VideoAndChatDiv>
      </S.Body>
    </S.EditorContainer>
  );
};

Editor.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  doc: PropTypes.bool,
};
Editor.defaultProps = {
  doc: false,
};

export default Editor;
