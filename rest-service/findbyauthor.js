const fileStream = require('fs')
const multiStream = require('multistream')
var removeBOM = require('remove-bom-stream');
const csv = require("csv-parser")
const express = require('express')
const app = express()
require('dotenv').config({path: '../.env'})

//email: email address of the author
//app.get('/findByAuthor/:email',
 exports.author = function(req, res) {
    var dataArray = []
    const email = req.params.email;

    const streams = [
    fileStream.createReadStream(process.env.BOOKFILE),
    fileStream.createReadStream(process.env.MAGAZINEFILE)
    ]
    new multiStream(streams)
    .pipe(removeBOM('utf-8'))
    .pipe(csv({separator: ';'}))
    .on("data", (row) => { 
        if(row.authors == email) dataArray.push(row)
    })
    .on("end", () => res.json(dataArray))
    .on("error", (error) => console.log(error.message))
};