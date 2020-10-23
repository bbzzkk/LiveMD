import React, { useEffect } from 'react';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { QuillBinding } from 'y-quill';
import Quill from 'quill';
import QuillCursors from 'quill-cursors';
import 'react-quill/dist/quill.snow.css';

const Editor = () => {
  useEffect(() => {
    Quill.register('modules/cursors', QuillCursors);

    const ydoc = new Y.Doc();
    const provider = new WebsocketProvider(
      // 'wss://demos.yjs.dev',
      'ws://3.35.98.199:1234',
      'quill',
      ydoc,
    );
    const type = ydoc.getText('quill');
    const editorContainer = document.createElement('div');
    editorContainer.setAttribute('id', 'editor');
    document.getElementById('wrapper').insertBefore(editorContainer, null);

    const editor = new Quill(editorContainer, {
      modules: {
        cursors: true,
        toolbar: [
          // [{ header: [1, 2, false] }],
          // ['bold', 'italic', 'underline'],
          // ['image', 'code-block'],
        ],
        history: {
          userOnly: true,
        },
      },
      placeholder: 'Start collaborating...',
      theme: 'snow', // or 'bubble'
    });

    const binding = new QuillBinding(type, editor, provider.awareness);
    console.log(editorContainer);

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

    /*
  // Define user name and user name
  // Check the quill-cursors package on how to change the way cursors are rendered
  provider.awareness.setLocalStateField('user', {
    name: 'Typing Jimmy',
    color: 'blue'
  })
  */
  });

  return (
    <div id="wrapper">
      <button type="button" id="y-connect-btn">
        Disconnect
      </button>
    </div>
  );
};

export default Editor;
