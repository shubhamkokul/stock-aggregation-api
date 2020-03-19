const axios = require('axios');

// @desc    Get all Stock depending up on the request parameter
// @route   Get /api/v1/stocks
// @access  Private
exports.getOptionDetails = async (req, res, next) => {
    const URL = `${process.env.OPTION_API}/${req.body.symbol}`;
    const response = await axios.get(URL, {
        params: {
            api_key: process.env.INTRINIO_API_KEY
        }
    })
    res.status(200).json({
        success: true,
        data: response.data
      });
};
