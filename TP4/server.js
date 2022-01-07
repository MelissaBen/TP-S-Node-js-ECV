
   
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;


app.use(bodyParser.json());

// exercice 7 

const Routes = require('./routes.js');
app.use('/', Routes);

const userRoutes = require('./handlers/users.js');
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server starts and listens on port' +  PORT);
});