#!/usr/bin/env node

/**
 * @type {any}
 */

// const crypto = require('crypto');
// const clone = require('lodash/clone');
const Y = require('yjs');

const WebSocket = require('ws')
const https = require('https')
const utils = require('./utils.js')
const wss = new WebSocket.Server({ noServer: true })
const setupWSConnection = utils.setupWSConnection

const fs = require('fs');
const express = require('express');
const app = express();
const options = {
  key: fs.readFileSync(./keys/private)
}
const server = https.createServer(options, app);
const bodyParser = require('body-parser');
// const io = require('socket.io')(server);
const bodyParserText = bodyParser.text();

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, './.env') });

const mongoose = require('mongoose');

const port = process.env.PORT || 1234

const docService = require('./services/doc');

const metadata = utils.metadata;
const docs = utils.docs;

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("mongoDB connected successful"))
  .catch((err) => console.error(err));

app.get('/pages', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(Object.keys(metadata).map((k) => {
    const m = metadata[k];
    return {
      page: k,
      created: m.created,
      modified: m.modified,
      active: m.active,
    };
  })));
});

app.post('/deletePage', bodyParserText, async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  const room = req.body;
  const delRoom = docs.get(room);
  if (!delRoom) {
    res.end(JSON.stringify({ status: 'FAILURE', msg: `No room ${room}` }));
    return;
  } 
  try {
    const roomMetadata = metadata[room];
    if (!roomMetadata) {
      res.end(JSON.stringify({ status: 'FAILURE', msg: 'No metadata' }));
      return;
    }
    if (roomMetadata.active > 0) {
      res.end(JSON.stringify({ status: 'FAILURE', msg: 'There are still users on this page' }));
      return;
    }
    try {
      docs.delete(room);
      delete metadata[room];
      res.end(JSON.stringify({ status: 'SUCCESS', msg: `Delete ${room}` }));
    } catch (ex) {
      console.error(ex);
      res.end(JSON.stringify({ status: 'FAILURE', msg: 'Y instance destroy error' }));
    }
  } catch (ex) {
    console.error(ex);
    res.end(JSON.stringify({ status: 'FAILURE', msg: ex }));
  }
});

wss.on('connection', setupWSConnection)

server.on('upgrade', (request, socket, head) => {
  // You may check auth of request here..
  /**
   * @param {any} ws
   */
  const handleAuth = ws => {
    wss.emit('connection', ws, request)
  }

  wss.handleUpgrade(request, socket, head, handleAuth)
})

server.listen(port)

console.log('running on port', port)


// const getOneDoc = async (docName) => {
//   console.log(docName);
//   const doc = await docService.getDocById(docName);
//   console.log(doc);
// }

// getOneDoc("test");

// const updateDoc = (docId, content) => {
//   docService.updateContent(docId, content);
// }

// updateDoc("test", "test test");

// const delDoc = (docId) => {
//   docService.deleteDoc(docId);
// }

// delDoc("test");

const updateModi = (docId) => {
  docService.updateModified(docId);
}

updateModi("test");