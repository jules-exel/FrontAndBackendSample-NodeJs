const express = require ('express');
const routes = require('./routes/prime');  
const app = express();
const port = 8080;
const cors = require("cors");

app.options("*", cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));
app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));

app.use(express.json());

app.use('/', routes);
 
app.listen(port, () => console.log('App is listening.'))