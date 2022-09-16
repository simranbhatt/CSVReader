//dependencies
const express = require('express')
const app = express()
var cors = require('cors');
require('dotenv').config()
app.use(cors({origin: 'http://localhost:'+process.env.CLIENTPORT}));
//APIs
const readfile = require('./readfile');
const findbyisbn = require('./findbyisbn');
const findbyauthor = require('./findbyauthor');
const sortedtitles = require('./sortedtitles');

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

//Read CSV files 
app.get('/readFile/:filename', readfile.read);
//find books/magazines by author
app.get('/findByAuthor/:email', findbyauthor.author);
//find book/magazine by isbn 
app.get('/findByISBN/:isbn', findbyisbn.isbn);
//get list of books & magazines sorted by title
app.get('/sortedTitles', sortedtitles.sort);



