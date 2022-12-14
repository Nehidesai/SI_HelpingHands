const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['https://myhelp.netlify.app', 'http://localhost:3000'];
var corsOptionsDelegate = (req, callback) => {
    var corsOptions = {
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
      };
    console.log(req.header('Origin'));
    // if(whitelist.indexOf(req.header('Origin')) !== -1) {
    //     corsOptions = { origin: true };
    // }
    // else {
    //     corsOptions = { origin: false };
    // }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);