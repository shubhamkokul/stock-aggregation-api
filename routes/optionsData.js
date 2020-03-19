const express = require('express');
const { getOptionDetails } = require('../controllers/optionsData');

const router = express.Router();

router.route('/detail').get(getOptionDetails);

module.exports = router;
