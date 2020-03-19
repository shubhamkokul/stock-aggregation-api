const express = require('express');
const {
  getCompanyList,
  getSearchCompanies,
  getLookupCompany,
  getCompanySecurities,
  getCompanyNews,
  getCompanyDataPointNumber,
  getCompanyDataPointText,
  getCompanyHistory
} = require('../controllers/companyData');

const router = express.Router();

router.route('/list').get(getCompanyList);

router.route('/search').get(getSearchCompanies);

router.route('/lookup').get(getLookupCompany);

router.route('/security').get(getCompanySecurities);

router.route('/news').get(getCompanyNews);

router.route('/datapointnumber').get(getCompanyDataPointNumber);

router.route('/datapointtext').get(getCompanyDataPointText);

router.route('/company-history').get(getCompanyHistory);

module.exports = router;
