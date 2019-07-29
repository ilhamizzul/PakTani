const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT_SERVER;

const category = require('./routes/category_item');
const account = require('./routes/account');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static('public'));

app.listen(port, function() {
    console.log("server running on " + port + " with DB: " + process.env.DB_NAME);
})

app.use(category);
app.use(account);

