import React, { useState, useEffect, useRef } from 'react';
import * as Y from 'yjs';
import { WebsocketProvider } from './y-websocket';
import { CodemirrorBinding } from './y-codemirror';
import { UnControlled as ReactCodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/theme/3024-night.css';
import io from 'socket.io-client';
import actual from 'actual';
import SplitPane from 'react-split-pane';
import 'github-markdown-css/github-markdown.css';
import PropTypes from 'prop-types';
import WikiParser from './WikiParser';
import './style.css';
import { EDITOR_API } from '@/utils/APIconfig';

const resizerMargin = 12;

const CodeMirror = ({
  roomName,
  defaultValue,
  value,
  heightMargin,
  onActiveUser,
  isVideoAndChatDivShowed,
  editorRatio,
  username,
}) => {
  const refEditor = useRef(null);
  const [previewWidth, setPreviewWidth] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [editorPercentage, setEditorPercentage] = useState(50);
  const [cursorPosition, setCursorPosition] = useState({});
  const [onFocus, setOnFocus] = useState(false);
  const [hast, setHast] = useState(
    WikiParser.convertToCustomHast(WikiParser.parseToHast(defaultValue)),
  );
  const socket = useRef(null);
  const provider = useRef(null);
  const cursorColor = useRef('#008833');

  const codeMirrorRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      window.addEventListener('resize', handleResize);
      updateHeight();
      updateWidth();
      if (roomName) {
        // socket.current = io(`http://${window.location.hostname}:8080`);
        // socket.current.on('activeUser', handleActiveUser);
        // socket.current.on('clientCursor', handleClientCursor);
        // socket.current.on('test', handleTest);
      }
    };

    fetchData();

    const ydoc = new Y.Doc();
    provider.current = new WebsocketProvider(
      //   'wss://demos.yjs.dev',
      //   'ws://3.35.98.199:1234',
      EDITOR_API,
      // 'codemirror-large',
      roomName,
      ydoc,
    );
    const type = ydoc.getText(roomName);
    const binding = new CodemirrorBinding(
      type,
      refEditor.current.editor,
      provider.current.awareness,
    );
    cursorColor.current = '#' + (ydoc.clientID % 0xffffff).toString(16);
    binding.awareness.setLocalStateField('user', {
      color: cursorColor.current,
      name: username,
    });

    provider.current.awareness.on('change', renderUsers);
    renderUsers();

    // setInterval(() => {
    //   Array.from(binding.awareness.getStates().entries())
    //     .filter(([clientid, state]) => state.user != null)
    //     .map(([clientid, state]) =>
    //       console.log(state.user.name));
    // }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize, false);
      if (socket.current) {
        // socket.current.off('activeUser', handleActiveUser);
        // socket.current.off('clientCursor', handleClientCursor);
        // socket.current.disconnect();
      }
      provider.current.destroy();
    };
  }, []);

  const renderUsers = () => {
    const users = Array.from(provider.current.awareness.getStates().entries())
      .filter(([clientid, state]) => state.user != null)
      .map(([clientid, state]) => {
        return state.user.name;
      });

    handleActiveUser(users);
  };

  useEffect(() => {
    refEditor.current.editor.setValue(value);
  }, [value]);

  useEffect(() => {
    if (editorPercentage === 50) updateWidth();
    else setEditorPercentage(50);
  }, [isVideoAndChatDivShowed, editorRatio]);

  useEffect(() => {
    if (editorPercentage === 50) updateWidth();
  }, [editorPercentage]);

  const updateHeight = () => {
    const newHeight = actual('height', 'px') - heightMargin;
    if (newHeight !== height) {
      setHeight(newHeight);
      if (refEditor.current) {
        refEditor.current.editor.setSize(null, newHeight);
      }
    }
  };

  const updateWidth = () => {
    const videoAndChatWidth =
      actual('width', 'px') - codeMirrorRef.current.offsetWidth;
    const vw = actual('width', 'px') - videoAndChatWidth;

    let newWidth = vw * (editorPercentage / 100) - resizerMargin;
    if (newWidth < 0) {
      newWidth = 0;
    }
    const previewWidth = vw - newWidth - 2 * resizerMargin - 1;
    // if (newWidth !== width) {
    // setWidth(newWidth * editorRatio.edit);
    // setPreviewWidth(previewWidth * editorRatio.preview);
    // }
    setWidth(newWidth * editorRatio.edit);
    setPreviewWidth(previewWidth * editorRatio.preview);
  };

  const handleResize = () => {
    updateWidth();
    updateHeight();
  };

  const handleActiveUser = users => {
    if (onActiveUser) onActiveUser(users);
  };

  // const handleClientCursor = msg => {
  //   const client = otherClients.get(msg.id);
  //   if (msg.type === 'update') {
  //     if (!refEditor.current) return;
  //     const cm = refEditor.current.editor;
  //     if (!client) {
  //       const newClient = new OtherClientCursor(msg.id);
  //       otherClients.set(msg.id, newClient);
  //       newClient.updateCursor(msg.cursorPos, cm);
  //     } else {
  //       client.updateCursor(msg.cursorPos, cm);
  //     }
  //   } else if (msg.type === 'delete') {
  //     if (client) {
  //       client.removeCursor();
  //       otherClients.delete(msg.id);
  //     }
  //   }
  // };

  // const sendCursorMsg = (type, cursorPos) => {
  //   if (socket.current) {
  //     const cursorMsg = {
  //       type,
  //       room: roomName,
  //       cursorPos,
  //     };
  //     socket.current.emit('clientCursor', cursorMsg);
  //   }
  // };

  const handleSplitResized = newSize => {
    const videoAndChatWidth =
      actual('width', 'px') - codeMirrorRef.current.offsetWidth;
    const viewportWidth = actual('width', 'px') - videoAndChatWidth;
    const newPercentage = (100.0 * newSize) / viewportWidth;
    if (newPercentage !== editorPercentage) {
      setEditorPercentage(newPercentage);
      updateWidth();
    }
  };

  const handleEdit = (_, data) => {
    if (!refEditor.current) return;
    const text = refEditor.current.editor.getValue();
    const hastOriginal = WikiParser.parseToHast(text);
    const hast = WikiParser.convertToCustomHast(hastOriginal);
    setHast(hast);
    if (
      data.origin === '+input' ||
      data.origin === '*compose' ||
      data.origin === '+delete'
    ) {
      // sendCursorMsg('update', { line: data.from.line, ch: data.from.ch });
    }
  };

  // const handleAppEdit = (newText, appContext) => {
  //   const cm = refEditor.current.editor;
  //   const startFencedStr = cm.getLine(appContext.position.start.line - 1);
  //   const [backticks] = WikiParser.getExtraFencingChars(
  //     startFencedStr,
  //     newText,
  //   );
  //   if (backticks) {
  //     cm.operation(() => {
  //       cm.replaceRange(backticks, {
  //         line: appContext.position.start.line - 1,
  //         ch: appContext.position.start.column - 1,
  //       });
  //       cm.replaceRange(backticks, {
  //         line: appContext.position.end.line - 1,
  //         ch: appContext.position.start.column - 1,
  //       });
  //     });
  //   }
  //   const indentedNewText = WikiParser.indentAppCode(
  //     appContext.position,
  //     WikiParser.removeLastNewLine(newText),
  //   );
  //   const isOldTextEmpty =
  //     appContext.position.start.line === appContext.position.end.line - 1;
  //   if (!isOldTextEmpty) {
  //     const lastLine = cm.getLine(appContext.position.end.line - 2);
  //     const startPos = { line: appContext.position.start.line, ch: 0 };
  //     const endPos = {
  //       line: appContext.position.end.line - 2,
  //       ch: lastLine.length,
  //     };
  //     const oldText = cm.getRange(startPos, endPos);
  //     const changes = diffChars(oldText, indentedNewText);
  //     let cursor = { line: startPos.line, ch: startPos.ch };
  //     const nextPosition = (p, str) => {
  //       const lines = str.split('\n');
  //       if (lines.length >= 2) {
  //         return {
  //           line: p.line + (lines.length - 1),
  //           ch: lines[lines.length - 1].length,
  //         };
  //       }
  //       return {
  //         line: p.line,
  //         ch: p.ch + lines[0].length,
  //       };
  //     };
  //     cm.operation(() => {
  //       changes.forEach(c => {
  //         if (c.removed) {
  //           const end = nextPosition(cursor, c.value);
  //           cm.replaceRange('', cursor, end);
  //         } else if (c.added) {
  //           cm.replaceRange(c.value, cursor);
  //           cursor = nextPosition(cursor, c.value);
  //         } else {
  //           cursor = nextPosition(cursor, c.value);
  //         }
  //       });
  //     });
  //   } else {
  //     const position = { line: appContext.position.end.line - 1, ch: 0 };
  //     cm.operation(() => {
  //       cm.replaceRange('\n', position);
  //       cm.replaceRange(indentedNewText, position);
  //     });
  //   }
  //   sendCursorMsg('update', {
  //     line: appContext.position.start.line - 1,
  //     ch: appContext.position.start.column - 1,
  //   });
  // };

  const handleCursor = (editor, data) => {
    // Code-mirror counts lines and columns from zero.
    setCursorPosition({
      ...cursorPosition,
      line: data.line + 1,
      column: data.ch + 1,
    });
  };

  const handleFocus = () => {
    setOnFocus(true);
  };

  const handleBlur = () => {
    setOnFocus(false);
  };

  const cmOptions = {
    mode: 'markdown',
    lineNumbers: true,
    lineWrapping: true,
    theme: '3024-night',
  };

  return (
    <div ref={codeMirrorRef}>
      <SplitPane
        split="vertical"
        size={width + resizerMargin}
        onChange={handleSplitResized}
        pane1Style={
          editorRatio.edit ? { display: 'inline-block' } : { display: 'none' }
        }
        pane2Style={
          editorRatio.preview
            ? { display: 'inline-block' }
            : { display: 'none' }
        }
        resizerStyle={
          !editorRatio.edit || !editorRatio.preview
            ? { display: 'none' }
            : { display: 'inline-block' }
        }
      >
        <ReactCodeMirror
          ref={refEditor}
          value={defaultValue}
          options={cmOptions}
          onChange={handleEdit}
          onCursor={handleCursor}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div
          style={{
            overflow: 'auto',
            width: previewWidth,
            height,
            paddingLeft: resizerMargin,
          }}
          className="markdown-body"
        >
          {WikiParser.renderCustomHast(hast, {
            cursorPosition: onFocus ? cursorPosition : null,
          })}
        </div>
      </SplitPane>
    </div>
  );
};

CodeMirror.propTypes = {
  onActiveUser: PropTypes.func,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  roomName: PropTypes.string,
  heightMargin: PropTypes.number,
  isVideoAndChatDivShowed: PropTypes.bool,
};

CodeMirror.defaultProps = {
  onActiveUser: () => {},
  defaultValue: '',
  value: null,
  roomName: null,
  heightMargin: 0,
  isVideoAndChatDivShowed: true,
};

export default CodeMirror;
