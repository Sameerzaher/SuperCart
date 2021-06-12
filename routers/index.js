const express = require('express');
const storeRouter = require('./stores');
const priceRouter = require('./prices');
const productRouter = require('./products');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/store',
    route: storeRouter,
  },
  {
    path: '/price',
    route: priceRouter,
  },
  {
    path: '/product',
    route: productRouter,
  },

];
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
