const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const defaultRouter = require('./routes/default-route');

app.use(defaultRouter); 

app.listen(3000);
