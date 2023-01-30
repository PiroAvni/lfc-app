// importing packages
const express = require("express");
const router = express.Router();
const cors = require("cors");
const fs = require('fs');

// const fetch = (...args) =>
//   import("node-fetch").then(({ default: fetch }) => fetch(...args));

router.get(`/`, cors(), function (req, res) {

    function jsonReader(filePath, cb) {
        fs.readFile(filePath, (err, fileData) => {
          if (err) {
            return cb && cb(err);
          }
          try {
            const object = JSON.parse(fileData);
            return cb && cb(null, object);
          } catch (err) {
            return cb && cb(err);
          }
        });
      }
      jsonReader("../Data/fixtures.json", (err, customer) => {
        if (err) {
          console.log(err);
          return;
        }
    })
});

module.exports = router;
