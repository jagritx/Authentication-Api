const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Importing routes
/*
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts')
*/
const testRoute = require('./routes/test')

/*
dotenv.config();
*/
//Connect to DB
/*
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true}, 
() => console.log('Connected to db!'));
*/

//Middleware
app.use(express.json());

//Route Middlewares
/*
app.use('/api/user',authRoute);
app.use('/api/posts',postRoute);
*/
app.use('/',testRoute);



app.listen(process.env.PORT||3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
