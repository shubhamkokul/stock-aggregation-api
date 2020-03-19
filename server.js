const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const errorHandler = require('./middleware/error');

//ENV Variables
dotenv.config({ path: './config/config.env' });

//Route Files
const stockData = require('./routes/stockData');
const renderHTML = require('./routes/renderHTML');
const optionData = require('./routes/optionsData');
const companyData = require('./routes/companyData');
//Enabling Express app
const app = express();

app.use(express.json());

//Setting Up views
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

//Basic Route
app.use('/', renderHTML);

//Advance Routes
app.use('/api/v1/stocks', stockData);
app.use('/api/v1/company', companyData);
app.use('/api/v1/options', optionData);

//Error Handler
app.use(errorHandler);

//Starting the server
const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
