const fileStream = require('fs');
const { stringify } = require('csv-stringify');
//function to create csv file based on data passed in request body, filename passed in POST params 
exports.write = function (req, res) {
    const data = req.body;
    const filename = req.params.filename;
    const filePath = process.env.FILEDIRECTORY + filename + '.csv'
    stringify(data, { header: true }, function (err, output) {
        fileStream.writeFile(filePath, output, (err) => { if (err) console.log(err) });
    });
    res.send("file written to " + filePath);
};