const intrinioSDK = require('intrinio-sdk');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../util/errorResponse');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey =
  process.env.INTRINIO_API_KEY;
const companyAPI = new intrinioSDK.CompanyApi();

exports.getCompanyList = asyncHandler(async (req, res, next) => {
  const opts = {
    latestFilingDate: null, // Date | Return companies whose latest 10-Q or 10-K was filed on or after this date
    sic: null, // String | Return companies with the given Standard Industrial Classification code
    template: null, // String | Return companies with the given financial statement template
    sector: null, // String | Return companies in the given industry sector
    industryCategory: null, // String | Return companies in the given industry category
    industryGroup: null, // String | Return companies in the given industry group
    hasFundamentals: true, // Boolean | Return only companies that have fundamentals when true
    hasStockPrices: true, // Boolean | Return only companies that have stock prices when true
    pageSize: 100, // Number | The number of results to return
    nextPage: null // String | Gets the next page of data from a previous API call
  };
  const response = await companyAPI.getAllCompanies(opts);
  res.status(200).json({
    success: true,
    data: response
  });
});

exports.getSearchCompanies = asyncHandler(async (req, res, next) => {
  if (!req.body.pageSize) {
    return next(
      new ErrorResponse(`Please pass the params in body for 'pageSize'`, 400)
    );
  }
  if (!req.body.company) {
    return next(
      new ErrorResponse(`Please pass the params in body for 'company'`, 400)
    );
  }
  const opts = {
    pageSize: req.body.pageSize // Number | The number of results to return
  };
  const query = req.body.company;
  const response = await companyAPI.searchCompanies(query, opts);
  res.status(200).json({
    success: true,
    data: response
  });
});

exports.getLookupCompany = asyncHandler(async (req, res, next) => {
  if (!req.body.identifier) {
    return next(
      new ErrorResponse(`Please pass the params in body for 'identifier'`, 400)
    );
  }
  const identifier = req.body.identifier;
  const response = await companyAPI.getCompany(identifier);
  res.status(200).json({
    success: true,
    data: response
  });
});

exports.getCompanySecurities = asyncHandler(async (req, res, next) => {
  if (!req.body.identifier) {
    return next(
      new ErrorResponse(`Please pass the params in body for 'identifier'`, 400)
    );
  }
  const opts = {
    nextPage: null // String | Gets the next page of data from a previous API call
  };
  const identifier = req.body.identifier;
  const response = await companyAPI.getCompanySecurities(identifier, opts);
  res.status(200).json({
    success: true,
    data: response
  });
});

exports.getCompanyNews = asyncHandler(async (req, res, next) => {
  if (!req.body.identifier) {
    return next(
      new ErrorResponse(`Please pass the params in body for 'identifier'`, 400)
    );
  }
  const opts = {
    pageSize: 100, // Number | The number of results to return
    nextPage: null // String | Gets the next page of data from a previous API call
  };
  const identifier = req.body.identifier;
  const response = await companyAPI.getCompanyNews(identifier, opts);
  res.status(200).json({
    success: true,
    data: response
  });
});

exports.getCompanyDataPointNumber = asyncHandler(async (req, res, next) => {
  if (!req.body.identifier) {
    return next(
      new ErrorResponse(`Please pass the params in body for 'identifier'`, 400)
    );
  }
  if (!req.body.tag) {
    return next(
      new ErrorResponse(`Please pass the params in body for 'tag'`, 400)
    );
  }
  const identifier = req.body.identifier;
  const tag = req.body.tag;
  const response = await companyAPI.getCompanyDataPointNumber(identifier, tag);
  res.status(200).json({
    success: true,
    data: response
  });
});

exports.getCompanyDataPointText = asyncHandler(async (req, res, next) => {
  if (!req.body.identifier) {
    return next(
      new ErrorResponse(`Please pass the params in body for 'identifier'`, 400)
    );
  }
  if (!req.body.tag) {
    return next(
      new ErrorResponse(`Please pass the params in body for 'tag'`, 400)
    );
  }
  const identifier = req.body.identifier;
  const tag = req.body.tag;
  const response = await companyAPI.getCompanyDataPointNumber(identifier, tag);
  res.status(200).json({
    success: true,
    data: response
  });
});

exports.getCompanyHistory = asyncHandler(async (req, res, next) => {
  if (!req.body.identifier) {
    return next(
      new ErrorResponse(`Please pass the params in body for 'identifier'`, 400)
    );
  }
  if (!req.body.tag) {
    return next(
      new ErrorResponse(`Please pass the params in body for 'tag'`, 400)
    );
  }
  const identifier = req.body.identifier;
  const tag = req.body.tag;
  const opts = {
    frequency: 'daily', // String | Return historical data in the given frequency
    type: null, // String | Return historical data for given fiscal period type
    startDate: new Date('2018-01-01'), // Date | Return historical data on or after this date
    endDate: null, // Date | Return historical data on or before this date
    sortOrder: 'desc', // String | Sort by date `asc` or `desc`
    pageSize: 100, // Number | The number of results to return
    nextPage: null // String | Gets the next page of data from a previous API call
  };
  const response = await companyAPI.getCompanyHistoricalData(
    identifier,
    tag,
    opts
  );
  res.status(200).json({
    success: true,
    data: response
  });
});
