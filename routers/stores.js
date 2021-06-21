const express = require('express');
const c = require('../controller/stores');

const router = express.Router();
router.get('/gps', c.getStoresByGps)
router.get('/city', c.getStoresByCityId)


module.exports = router