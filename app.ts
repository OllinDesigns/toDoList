import express from 'express';
import toDoController from './src/application/controllers/toDoController';

const app = express();

// set up template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('public'));

// fire controllers
toDoController(app);

// listen to port
app.listen(3000, () => {
  console.log('Gurrus says hello from port 3000');
});
