#!/usr/bin/env node
'use strict'
const config = require('config')
const turn = require('../turn.js')
const router = require('express').Router()
const uuid = require('uuid')

const BASE_URL = config.get('baseUrl')

router.get('/', (req, res) => {
  console.log(ioServer.sockets.adapter.rooms);
  const counter = Object.keys(ioServer.sockets.adapter.rooms)
  const shufrooms = shuffle(counter)
  shufrooms.forEach(function(room) {
    if(room.length > 30) {
      res.redirect(`${BASE_URL}/call/${room}`)
    }
  })
  res.redirect(`${BASE_URL}/call/${uuid.v4()}`)
})


module.exports = router


function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
