import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Chat, CodeMirror, Room } from '@/components/editor';
import S from './style';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  IconButton,
  Badge,
  Popper,
  Fade,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import {
  CreateRounded,
  ImportContactsRounded,
  VisibilityRounded,
  PeopleOutlineRounded,
  ChatRounded,
} from '@material-ui/icons';
import {useLocation} from "react-router";


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
  const [msgCount, setMsgCount] = useState(0);
  const [openActive, setOpenActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const location = useLocation();
  const user = location.state.user;
  const title = location.state.title;

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
      setMsgCount(0);
      setChatShowed(true);
      setVideoAndChatDivShowed(true);
    }
  };

  const handleRatio = (edit, preview) => {
    setEditorRatio({ edit: edit, preview: preview });
  };

  const handleActive = (openActive) => event => {
    setAnchorEl(event.currentTarget);
    setOpenActive(openActive);
  };

  const useStyles = makeStyles(theme => ({
    root: {
      width: 500,
    },
    activeList: {
      width: '100%',
      minWidth: 100,
      backgroundColor: '#f1f1f1',
    },
    listItemText: {
      fontSize: '14px',
    }
  }));

  const classes = useStyles();

  return (
    <S.EditorContainer>
      <S.Header>
        <S.PageName
          value={title}
          onChange={e => setDocName(e.target.value)}
        />
        <S.EditBtnGroup>
          <IconButton
            style={{
              color: !editorRatio.preview ? '#1e6896' : '#bdbdbd',
            }}
            onClick={() => handleRatio(2, 0)}
            aria-label="CreateOutlinedIcon"
            size="medium"
            disableRipple
          >
            <CreateRounded />
          </IconButton>
          <IconButton
            style={{
              color:
                editorRatio.edit && editorRatio.preview ? '#1e6896' : '#bdbdbd',
            }}
            onClick={() => handleRatio(1, 1)}
            aria-label="ImportContactsRoundedIcon"
            size="medium"
            disableRipple
          >
            <ImportContactsRounded />
          </IconButton>
          <IconButton
            style={{
              color: !editorRatio.edit ? '#1e6896' : '#bdbdbd',
            }}
            onClick={() => handleRatio(0, 2)}
            aria-label="VisibilityRoundedIcon"
            size="medium"
            disableRipple
          >
            <VisibilityRounded />
          </IconButton>
        </S.EditBtnGroup>
        <S.VideoAndChatBtnGroup>
          <IconButton
            style={{
              color: isVideoShowed ? '#1e6896' : '#bdbdbd',
            }}
            onClick={videoShowAndHide}
            aria-label="VisibilityRoundedIcon"
            size="medium"
            disableRipple
          >
            <PeopleOutlineRounded fontSize="large" />
          </IconButton>
          <IconButton
            style={{
              color: isChatShowed ? '#1e6896' : '#bdbdbd',
            }}
            onClick={chatShowAndHide}
            aria-label="ChatRoundedIcon"
            size="medium"
            disableRipple
          >
            <Badge badgeContent={msgCount} max={99} color="error">
              <ChatRounded fontSize="large" />
            </Badge>
          </IconButton>
          <Button
            style={{
              color: 'white',
              backgroundColor: '#1e6896',
              fontWeight: 'bold',
              marginLeft: '10px',
            }}
            onClick={handleActive(!openActive)}
          >
            {`ONLINE: ${activeUsers.length}`}
          </Button>
          <Popper
            open={openActive}
            anchorEl={anchorEl}
            placement='bottom-end'
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <div className={classes.activeList}>
                    <List
                      component="nav"
                      aria-label="activeList">
                        {activeUsers.map((user, index) => (
                          <ListItem key={index} >
                            <ListItemText
                              classes={{ primary: classes.listItemText }}
                              primary={user}
                            />
                          </ListItem>
                        ))}
                    </List>
                  </div>
                </Paper>
              </Fade>
            )}
          </Popper>
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
            username={user.username}
          />
        </S.CodeMirrorContainer>
        <S.VideoAndChatDiv isVideoAndChatDivShowed={isVideoAndChatDivShowed}>
          <S.VideoDiv isChatShowed={isChatShowed} isVideoShowed={isVideoShowed}>
            <Room roomID={roomName} username={user.username} />
          </S.VideoDiv>
          <S.ChatDiv isChatShowed={isChatShowed} isVideoShowed={isVideoShowed}>
            <Chat
              isVideoShowed={isVideoShowed}
              isChatShowed={isChatShowed}
              setMsgCount={setMsgCount}
              username={user.username}
            />
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
