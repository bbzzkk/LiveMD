#!/usr/bin/env node

/**
 * @type {any}
 */
const crypto = require('crypto');
const clone = require('lodash/clone');

const WebSocket = require('ws')
const http = require('http')
const utils = require('./utils.js')
const wss = new WebSocket.Server({ noServer: true })
const setupWSConnection = utils.setupWSConnection

const express = require('express');
const app = express();
const server = http.createServer(app);
const bodyParser = require('body-parser');
const io = require('socket.io')(server);
const bodyParserText = bodyParser.text();

const port = process.env.PORT || 1234

const metadata = utils.metadata;
const docs = utils.docs;

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

// setInterval(() => {
//   console.log(`    docs size : ${docs.size}`)
//   console.log(`metadata size : ${Object.keys(metadata).length}`)
// }, 5000);

server.listen(port)

console.log('running on port', port)
