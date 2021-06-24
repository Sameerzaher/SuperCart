const express = require('express');
const c = require('../controller/stores');

const router = express.Router();
router.post('/gps', c.getStoresByGps)
router.post('/city', c.getStoresByCityId)


module.exports = router