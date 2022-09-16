const fileStream = require('fs')
const multiStream = require('multistream')
var removeBOM = require('remove-bom-stream');
const csv = require("csv-parser")

require('dotenv').config({path: '../.env'})

//function to find a book/magazine that matches the isbn passed in GET params
exports.isbn = function(req, res) {
    const isbn = req.params.isbn;
    const streams = [
    fileStream.createReadStream(process.env.BOOKFILE),
    fileStream.createReadStream(process.env.MAGAZINEFILE)
    ]
    new multiStream(streams)
    .pipe(removeBOM('utf-8'))
    .pipe(csv({separator: ';'}))
    //returning book/magazine that matches the passed isbn value
    .on("data", (row) => { 
        if(row.isbn == isbn) 
            res.json(row)
    })
    .on("error", (error) => console.log(error.message))
};