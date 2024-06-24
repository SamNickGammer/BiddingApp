const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

// Todo: We will provide condition if there is Production or Development
app.use(cors({maxAge: 7200}))
app.use(bodyParser.json())

app.use('/api', routes)

module.exports = app;
