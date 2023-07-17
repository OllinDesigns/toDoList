let express = require('express')
toDoController = require('./toDoController');

const app = express()

// set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));
// i thing this has to do with the files of ninja in his github

// fire controllers
toDoController

// listen to port....