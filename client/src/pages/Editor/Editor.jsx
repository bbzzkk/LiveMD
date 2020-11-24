import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Chat, CodeMirror, Room } from '@/components/editor';
import S from './style';

const Editor = ({ doc, match }) => {
  const [activeUser, setActiveUser] = useState(0);
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

  const handleActiveUserDisp = userNum => {
    setActiveUser(userNum);
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

  return (
    <S.EditorContainer>
      <S.Header>
        <S.PageName
          value={docName}
          onChange={e => setDocName(e.target.value)}
        />
        <S.EditBtnGroup>
          <button>edit</button>
          <button>both</button>
          <button>view</button>
        </S.EditBtnGroup>
        <S.VideoAndChatBtnGroup>
          <button onClick={videoShowAndHide}>
            {isVideoShowed ? 'Hide Video' : 'Show Video'}
          </button>
          <button onClick={chatShowAndHide}>
            {isChatShowed ? 'Hide Chat' : 'Show Chat'}
          </button>
          <button>active</button>
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
            heightMargin={0}
            onActiveUser={handleActiveUserDisp}
            isVideoAndChatDivShowed={isVideoAndChatDivShowed}
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
/*
            <Button color='black' onClick={videoShowAndHide}>
              {videoButton ? 'Hide Video' : 'Show Video'}
            </Button>
            <Button color='black' onClick={chatShowAndHide}>
              {chatButton ? 'Hide Chat' : 'Show Chat'}
            </Button> 

            {activeUser > 0 ? (
              <div style={style.active}>{`(active: ${activeUser})`}</div>
            ) : null} 
          </div>
           <div style={style.contents}> 
               <div style={{ // Editor(header제외) 길이 맞춰주기
                ...style.editContent,
                width: videoButton ? '85%' : '100%' &&
                chatButton ? '85%' : '100%'}}>
                <CodeMirror
                  key={`page/${pageName}`}
                  roomName={roomName}
                  defaultValue={defaultValue}
                  value={docText}
                  heightMargin={style.header.height + style.header.padding * 2}
                  onActiveUser={handleActiveUserDisp}
                  videoButton={videoButton}
                  chatButton={chatButton}
                />
              </div> 
               <div className='RTC'>
                <Room videoIsShowed={videoIsShowed} />
                <Chat chatIsShowed={chatIsShowed} /> 
              </div> 
           </div>
        </div>    
      </div> 
*/

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
