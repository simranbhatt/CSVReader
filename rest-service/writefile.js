const fileStream = require('fs');
const stringify = require('csv-stringify');

require('dotenv').config({path: '../.env'})

exports.write = function(req, res) {
    const data = req.body;
    const filename = req.params.filename;
    stringify(data, { header: true }, function (err, output) {
    fileStream.writeFile('./files/'+'/'+filename+'.csv', output);
    console.log(err);
    })
};