const axios = require('axios');

// @desc    Get all Stock depending up on the request parameter
// @route   Get /api/v1/stocks
// @access  Private
exports.getStocksDetails = async (req, res, next) => {
  const response = await axios.get(process.env.REAL_TIME, {
    params: {
      symbol: req.body.symbol,
      api_token: process.env.API_TOKEN
    }
  });
  res.status(200).json({
    success: true,
    data: response.data
  });
};

// @desc    Get one Stock Intraday data depending up on the request parameter
// @route   Get /api/v1/intraday
// @access  Private
exports.getStocksIntraDay = async (req, res, next) => {
  const response = await axios.get(process.env.INTRA_DAY, {
    params: {
      symbol: req.body.symbol,
      interval: req.body.interval,
      range: req.body.range,
      api_token: process.env.API_TOKEN
    }
  });
  res.status(200).json({
    success: true,
    data: response.data
  });
};

// @desc    Get one Stock History data depending up on the request parameter
// @route   Get /api/v1/historys
// @access  Private
exports.getStocksHistory = async (req, res, next) => {
  const response = await axios.get(process.env.HISTORY, {
    params: {
      symbol: req.body.symbol,
      api_token: process.env.API_TOKEN
    }
  });
  res.status(200).json({
    success: true,
    data: response.data
  });
};

// @desc    Get one Stock Multi History 'Date' data depending up on the request parameter
// @route   Get /api/v1/multi_historys
// @access  Private
exports.getStocksMultiHistory = async (req, res, next) => {
  const response = await axios.get(process.env.MULTI_HISTORY, {
    params: {
      symbol: req.body.symbol,
      api_token: process.env.API_TOKEN,
      date: req.body.date
    }
  });
  res.status(200).json({
    success: true,
    data: response.data
  });
};
