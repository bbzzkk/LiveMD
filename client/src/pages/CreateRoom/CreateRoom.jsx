import React from 'react';

// import * as Y from 'yjs';
// import { WebsocketProvider } from 'y-websocket';

const CreateRoom = (props) => {
    const create = (id) => {
        props.history.push(`/editor/${id}`);
    }

    // const ydoc = new Y.Doc();
    // const provider = new WebsocketProvider(
    // //   'wss://demos.yjs.dev',
    //   'ws://3.35.98.199:1234',
    // //   'ws://localhost:1234',
    // // 'codemirror-large',
    //   'room1',
    //   ydoc,
    // );
    // const type = ydoc.getText('room1');
    // console.log(type.toString() + "test");

    return (
        <>
            <button onClick={() => create('room1')}>Create room1</button>
            <button onClick={() => create('room2')}>Create room2</button>
            <button onClick={() => create('room3')}>Create room3</button>
        </>
    );
};

export default CreateRoom;