const express = require('express');
const {
  getStocksDetails,
  getStocksIntraDay,
  getStocksHistory,
  getStocksMultiHistory
} = require('../controllers/stockData');

const router = express.Router();

router.route('/detail').get(getStocksDetails);

router.route('/intraday').get(getStocksIntraDay);

router.route('/history').get(getStocksHistory);

router.route('/multi_history').get(getStocksMultiHistory)

module.exports = router;
