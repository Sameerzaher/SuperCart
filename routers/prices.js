const express = require('express');
const c = require('../controller/prices');

const router = express.Router();

router.post('/barcode/:storeId', c.getPriceByBarcodes)

module.exports = router