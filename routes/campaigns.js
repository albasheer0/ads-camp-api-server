const express = require('express');
const router = express.Router();
const getDashboardData = require('../helpers/getDashboardData');
const readCSVFile = require('../helpers/csvReader')
const validateInputParameters = require('../helpers/validateInputParameters')
const csvFilePath ='./data/data.csv'
const datapageintation = require('../helpers/datapageintation')



// API endpoint for retrieving all dashboard data
router.post('/api/data', async (req, res) => {

  
  try {
    
    // extract the query from the request body
    const { startDate, endDate, sources, metric,page,pagesize } = req.body;
    console.log(req.body)
    
    // Validate the input parameters and return an error response if necessary
    const validationErrors = validateInputParameters(startDate, endDate, sources, metric);
    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }
    // Read the CSV data
    const csvData = await readCSVFile(csvFilePath);
    
  // Get the dashboard data
    const dashboardData = await getDashboardData(startDate, endDate, sources, metric, csvData,page,pagesize);

    // Return the dashboard data in the response
    res.json(dashboardData);

  } catch (error) {
    res.status(500).json({ error: error.message });

  }
});

// API endpoint for geting data by page
router.post('/api/datatable', async (req, res) => {


  try {

    // extract the query from the request body
    const { startDate, endDate, sources, metric,page,pagesize } = req.body;
    console.log(req.body)

    // Validate the input parameters and return an error response if necessary
    const validationErrors = validateInputParameters(startDate, endDate, sources, metric);
    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
      return;
    }
    // Read the CSV data
    const csvData = await readCSVFile(csvFilePath);

    // Get the dashboard data
    const Data = await datapageintation(startDate, endDate, sources, metric, csvData,page,pagesize);

    // Return the dashboard data in the response
    res.json(Data);

  } catch (error) {
    res.status(500).json({ error: error.message });

  }
});

module.exports = router;
