//dependencies
require('dotenv').config()
const express = require('express')
const app = express()
var cors = require('cors');
app.use(cors({origin: 'http://localhost:'+process.env.CLIENTPORT}));
app.use(express.json());
const stringify = require('csv-stringify');
//APIs
const readfile = require('./readfile');
const findbyisbn = require('./findbyisbn');
const findbyauthor = require('./findbyauthor');
const sortedtitles = require('./sortedtitles');
const writefile = require('./writefile');

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

//Read CSV files; params: filename to read
app.get('/readFile/:filename', readfile.read);
//find books/magazines by author; params: author email to search by
app.get('/findByAuthor/:email', findbyauthor.author);
//find book/magazine by isbn; params: isbn to search by
app.get('/findByISBN/:isbn', findbyisbn.isbn);
//get list of books & magazines sorted by title
app.get('/sortedTitles', sortedtitles.sort);
//save new csv file; params filename, body: file data in JSON format
app.post('/writeFile/:filename', writefile.write);



