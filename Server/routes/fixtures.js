// importing packages
const express = require("express");
const router = express.Router();
const cors = require("cors");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

router.get(`/`, cors(), function (req, res) {
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e67f45540dmsh7e5fd2507dadc3cp19a187jsnbdfc75526260',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
         }
      };
    
    fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?team=40&next=5', options)
      .then(response => {
        return response.json()
      })
      .then((json) => {
        let data = json.response;
        console.log({data})
        return res.status(200).json(data);
        
      })

  /* const url = "https://api-football-v1.p.rapidapi.com/v3/teams?name=liverpool";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e67f45540dmsh7e5fd2507dadc3cp19a187jsnbdfc75526260",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  // promise syntax
  fetch(url, options)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let data = json.response;
      console.log(data[0]);
      //console.log({...data}[0])
      //console.log(data[0].venue.address)
      return res.status(200).json(data);
    })
    .catch((err) => console.error("error:" + err)); */
});

module.exports = router;
