import React, { useEffect } from 'react';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { CodemirrorBinding } from 'y-codemirror';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import './style.css';
import marked from 'marked';

const Editor = () => {
  useEffect(() => {
    const ydoc = new Y.Doc();
    const provider = new WebsocketProvider(
      'wss://demos.yjs.dev',
      // 'ws://3.35.98.199:1234',
      'codemirror-large',
      ydoc,
    );
    const type = ydoc.getText('codemirror');
    const editorContainer = document.createElement('div');
    editorContainer.setAttribute('id', 'editor');
    document.getElementById('wrapper').insertBefore(editorContainer, null);

    const editor = CodeMirror(editorContainer, {
      mode: {
        name: 'markdown',
        highlightFormatting: true
      },
      lineNumbers: true,
      theme: 'markdown',
      lineWrapping: true,
    });


    // const binding = new CodemirrorBinding(type, editor, provider.awareness);
    
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
  });


  const text = '# test string';
  const markedTest = marked(text, { sanitize: true });
  return (
    <>
      <div id="wrapper">
        <button type="button" id="y-connect-btn">
          Disconnect
        </button>
      </div>
      <div dangerouslySetInnerHTML={{ __html: markedTest }} />
    </>
  );
};

export default Editor;
