import React, { useState, useEffect, useRef } from 'react';
import * as Y from 'yjs';
import { WebsocketProvider } from './y-websocket';
import { CodemirrorBinding } from './y-codemirror';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import './style.css';
import marked from 'marked';

const Editor = (props) => {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);
  const markedTest = marked(text, { sanitize: true });
  const editorID = props.match.params.editorID;

  const handleChange = doc => {
    if(textareaRef.current)
    setText(doc.getValue());
  };

  useEffect(() => {
    const ydoc = new Y.Doc();
    const provider = new WebsocketProvider(
    //   'wss://demos.yjs.dev',
      'ws://3.35.98.199:1234',
    //   'ws://localhost:1234',
    // 'codemirror-large',
      editorID,
      ydoc,
    );
    const type = ydoc.getText(editorID);
    const editor = CodeMirror.fromTextArea(textareaRef.current, {
      mode: {
        name: 'markdown',
        highlightFormatting: true,
      },
      lineNumbers: true,
      theme: 'markdown',
      lineWrapping: true,
    });
    const binding = new CodemirrorBinding(type, editor, provider.awareness);

    editor.on('change', handleChange);

    const connectBtn = document.getElementById('y-connect-btn');
    connectBtn.addEventListener('click', () => {
      if (provider.shouldConnect) {
        provider.disconnect();
        connectBtn.textContent = 'Connect';
      } else {
        provider.connect();
        connectBtn.textContent = 'Disconnect';
      }
    });

    return () => {
      if (editor) {
        editor.toTextArea();
      }
    };
  }, []);

  return (
    <>
      <div id="wrapper">
        <button type="button" id="y-connect-btn">
          Disconnect
        </button>
        <textarea ref={textareaRef} onChange={handleChange} value={text} />
        <div dangerouslySetInnerHTML={{ __html: markedTest }} />
      </div>
    </>
  );
};

export default Editor;
