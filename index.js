const { getProductsByBarcode } = require("./utils/superGet/products");

const express = require('express');
const http = require('http');
const cors = require('cors');
const router = require('./routers')

// const router = require('./routers/index');
const config = require('./config/index');

const app = express();
const server = http.Server(app);

app.use(express.json());
app.use(cors());
app.options('*', cors());
// handle all the requests in the router
app.use('/api', router);

app.get('/', () => getProductsByBarcode())
server.listen(config.port, () => {
  console.log(`App is listening on port ${config.port}`);
});