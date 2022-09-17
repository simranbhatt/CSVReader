const fileStream = require('fs')
const multiStream = require('multistream')
var removeBOM = require('remove-bom-stream');
const csv = require("csv-parser")

//function to find all books/magazines that match the author email passed in GET params
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
    //adding books/magazines by author to an array
    .on("data", (row) => { 
        if(row.authors == email) 
            dataArray.push(row)
    })
    //returning final array of matched books/magazines
    .on("end", () => res.json(dataArray))
    .on("error", (error) => console.log(error.message))
};