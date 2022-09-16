const fileStream = require('fs')
const csv = require("csv-parser")
var removeBOM = require('remove-bom-stream');

require('dotenv').config({path: '../.env'})

//function to read csv file based on file name passed in GET params
exports.read = function(req, res) {
    var dataArray = [];
    //construct file path based on passed filename 
    const filename = process.env.FILEDIRECTORY + req.params.filename + ".csv";
    //retrieve and parse file row by row
    fileStream.createReadStream(filename)
    .pipe(removeBOM('utf-8'))
    .pipe(csv({separator: ';'}))
    //add each row object to an array
    .on("data", (row) => dataArray.push(row) )
    //return final array of row objects
    .on("end", () => res.json(dataArray) )
    .on("error", (error) => console.log(error.message) )
    };

