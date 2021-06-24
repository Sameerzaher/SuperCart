const express = require('express');
const c = require('../controller/products');

const router = express.Router();

router.post('/barcode', c.getProductsByBarcode)
router.post('/name', c.getProductsByName)

module.exports = router