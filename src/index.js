const express = require("express");
const bodyParser = require('body-parser');
require("dotenv").config();
const PORT = process.env.SERVER_PORT || 3000;

const routes = require('./routes')
const app = express();

app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

app.use('/api/v2', routes.v2);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
