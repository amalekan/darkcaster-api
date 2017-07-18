/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const darksky = process.env.DARKSKY || require('../credentials').darksky;
// const google = process.env.GOOGLE || require('../credentials').google;
const baseUrl = `https://api.darksky.net/forecast/${darksky}/`;
const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?&address=`;
const axios = require('axios');

router.get('/weather', (request, response, next) => {
  const url = `${baseUrl}29.659375122,-82.4265112`;
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
router.get('/weather/location/:location', (request, response, next) => {
  const location = request.params.location;
  const locUrl = `${googleUrl}${location}`;
  axios.get(locUrl)
       .then((loc) => {
        const lat = loc.data.results[0].geometry.location.lat;
        const lon = loc.data.results[0].geometry.location.lng;
        const url = `${baseUrl}${lat},${lon}`;
        return axios.get(url)
                    .then(weather => {
                      response.json(weather.data);
                    })
                    .catch(err => {
                      next(err);
                    });
      })
       .catch(err => {
         next(err);
       });
});
//
// router.get('/weather/MyLocation', (request, response, next) => {
//     //Get current location using IP address
//     axios.get('http://ip-api.com/json')
//          .then((loc) => {
//            const lat = loc.data.lat;
//            const lon = loc.data.lon;
//            const url =`${baseUrl}${lat},${lon}`;
//            return axios.get(url)
//                        .then(weather => {
//                          response.json(weather.data);
//                        })
//                        .catch(err => {
//                          next(err);
//                        });
//          })
//           .catch(err => {
//             next(err);
//           });
//        });
module.exports = router;
