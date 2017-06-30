/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const darksky = process.env.DARKSKY || require('../credentials').darksky;
const baseUrl = `https://api.darksky.net/forecast/${darksky}/`;
const axios = require('axios');

router.get('/weather', (request, response, next) => {
  const url = `${baseUrl}29,-82`;
  axios.get(url)
       .then(weather => {
         response.json(weather.data);
       })
       .catch(err => {
         next(err);
       });
});
router.get('/weather/:lat,:lon', (request, response, next) => {
  const lat = request.params.lat;
  const lon = request.params.lon;
  const url = `${baseUrl}${lat},${lon}`;
  axios.get(url)
       .then(weather => {
         response.json(weather.data);
       })
       .catch(err => {
         next(err);
       });
});
module.exports = router;
