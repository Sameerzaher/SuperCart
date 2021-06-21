const express = require('express');
const c = require('../controller/products');

const router = express.Router();

router.get('/barcode', c.getProductsByBarcode)
router.get('/name', c.getProductsByName)

module.exports = router