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

const resizerMargin = 12;

// class OtherClientCursor {
//   constructor(id) {
//     this.id = id;
//     let hue = 0;
//     for (let i = 0; i < id.length; i += 1) {
//       hue *= 2;
//       hue += id.charCodeAt(i);
//       hue %= 360;
//     }
//     this.color = `#${ColorConvert.hsv.hex(hue, 100, 100)}`;
//   }

//   updateCursor(cursorPos, cm) {
//     this.removeCursor();
//     const svgSize = 8;
//     const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//     svg.setAttribute('width', svgSize);
//     svg.setAttribute('height', svgSize);
//     svg.setAttribute('viewBox', `0 0 ${svgSize} ${svgSize}`);
//     svg.style.position = 'absolute';
//     svg.style.marginLeft = `-${svgSize / 2}px`;
//     svg.style.marginTop = `${cm.defaultTextHeight()}px`;
//     const polyline = document.createElementNS(
//       'http://www.w3.org/2000/svg',
//       'polyline',
//     );
//     polyline.setAttribute(
//       'points',
//       `0 ${svgSize}, ${svgSize / 2} 0, ${svgSize} ${svgSize}, 0 ${svgSize}`,
//     );
//     polyline.setAttribute('fill', this.color);
//     polyline.setAttribute('fill-opacity', 0.9);
//     svg.appendChild(polyline);
//     this.marker = cm.setBookmark(cursorPos, { widget: svg, insertLeft: true });
//   }

//   removeCursor() {
//     if (this.marker) {
//       this.marker.clear();
//       this.marker = null;
//     }
//   }
// }

const Editor = ({
  roomName,
  defaultValue,
  value,
  heightMargin,
  onActiveUser,
  videoButton,
  chatButton
}) => {
  const refEditor = useRef(null);
  const [previewWidth, setPreviewWidth] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [editorPercentage, setEditorPercentage] = useState(50);
  const otherClients = new Map();
  const [cursorPosition, setCursorPosition] = useState({});
  const [onFocus, setOnFocus] = useState(false);
  const [hast, setHast] = useState(
    WikiParser.convertToCustomHast(WikiParser.parseToHast(defaultValue)),
  );
  const socket = useRef(null);
  const provider = useRef(null);

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
      'wss://live-md.com:8006/ws',
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

    binding.awareness.setLocalStateField('user', { color: '#008833', name: ydoc.clientID });

    // provider.current.awareness.on('change', renderUsers);
    // setInterval(() => {
    //   Array.from(binding.awareness.getStates().entries())
    //     .filter(([clientid, state]) => state.user != null)
    //     .map(([clientid, state]) =>
    //       console.log(state.user.name));
    // }, 5000);

    // const connectBtn = document.getElementById('y-connect-btn');
    // connectBtn.addEventListener('click', () => {
    //   if (provider.current.shouldConnect) {
    //     provider.current.disconnect();
    //     connectBtn.textContent = 'Connect';
    //   } else {
    //     provider.current.connect();
    //     connectBtn.textContent = 'Disconnect';
    //   }
    // });

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


  useEffect(() => {
    refEditor.current.editor.setValue(value);
  }, [value]);

  const renderUsers = () => {
    console.log(provider.current.awareness.getStates().entries());
    // const userTemplate = (name, color, colorLight, islocaluser) =>
    //   <div
    //     y-islocaluser="${islocaluser.toString()}"
    //     style="background-color:${colorLight};border-color:${color}"
    //   >
    //     ${name}
    //   </div>
    // return (
    //   Array.from(provider.current.awareness.getStates().entries())
    //     .filter(([clientid, state]) => state.user != null)
    //     .map(([clientid, state]) =>
    //       userTemplate(
    //         state.user.name,
    //         state.user.color,
    //         state.user.colorLight, clientid === provider.current.doc.clientID
    //       )
    //     )
    // );
  }

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
    const vw = actual('width', 'px');
    let newWidth = vw * (editorPercentage / 100) - resizerMargin;
    if (newWidth < 0) {
      newWidth = 0;
    }
    const previewWidth = vw - newWidth - 2 * resizerMargin - 1;
    if (newWidth !== width) {
      setWidth(newWidth);
      setPreviewWidth(previewWidth);
    }
  };

  const handleResize = () => {
    updateWidth();
    updateHeight();
  };

  const handleActiveUser = (userNum) => {
    if (onActiveUser) onActiveUser(userNum);
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
    const viewportWidth = actual('width', 'px');
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
    <>
      {/* <div id="wrapper">
        <button type="button" id="y-connect-btn">
          Disconnect
        </button>
      </div> */}
      <SplitPane
        split="vertical"
        size={width + resizerMargin }
        onChange={handleSplitResized}
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
            // Editor 길이는 Page에서 맞춰줬지만 Preview의 길이도 따로 설정해줘야함 안그러면 RTC들이 Preview침범.
            // width : 85% === previewWidth - 200과 얼추 맞음.
            width: videoButton ? previewWidth - 200 : previewWidth &&
            chatButton ? previewWidth - 200 : previewWidth,
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
    </>
  );
};

Editor.propTypes = {
  onActiveUser: PropTypes.func,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  roomName: PropTypes.string,
  heightMargin: PropTypes.number,
};

Editor.defaultProps = {
  onActiveUser: () => {},
  defaultValue: '',
  value: null,
  roomName: null,
  heightMargin: 0,
};

export default Editor;
