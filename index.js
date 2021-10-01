const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const mysql = require('mysql2');
const bodyParser = require("body-parser");
const routes = require("./api/routes");
const cors = require( 'cors' );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use( cors() );

routes(app);

app.listen(port);

console.log("design_app RESTful API server started on: " + port);
