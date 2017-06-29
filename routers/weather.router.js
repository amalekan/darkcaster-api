/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const darksky = require('../credentials').darksky;
const baseUrl = `https://api.darksky.net/forecast/${darksky}/`;
const axios = require('axios');

router.get('/weather', (request,response)=> {
  const url = `${baseUrl}29,-82`;
  axios.get(url)
       .then(weather => {
         response.json(weather.data);
       })
       .catch(err => {
         console.error(err);
       });
});
router.get('/weather/:lat,:lon', (request,response) => {
  // const url = `${baseUrl}${lat},${lon}`;
  // axios.get(url)
  //      .then(weather => {
  //        response.json(weather.data);
  //      })
  //      .catch(err => {
  //        console.error(err);
  //      });
});
module.exports = router;
