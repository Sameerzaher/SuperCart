const express = require('express');
const c = require('../controller/prices');

const router = express.Router();

router.get('/barcode/:storeId', c.getPriceByBarcodes)

module.exports = router