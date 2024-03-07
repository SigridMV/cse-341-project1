// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

app.set('json spaces', 2);

app.use(bodyParser.json());
app.use('/', require('./routes'));

mongodb.initDb((err) => {
  if(err){
    console.log(err);
  }
  else{app.listen(port, () =>{console.log(`Database is listening and node Running on port ${port}`)});}
})



 