const getFilteredData  = require('./getFilteredData');
const getSummaryMetrics = require('./getSummaryMetrics')
const getVisualizationsData = require('./getVisualizationsData')
async function getDashboardData(startDate, endDate, sources, metric, csvData,pageNumber , pageSize ) {
    const filteredData =await  getFilteredData(startDate, endDate, sources, csvData,pageNumber , pageSize );

    const summaryMetrics = getSummaryMetrics(filteredData.bdata);
    const visualizationsData = getVisualizationsData(filteredData.bdata, metric);

    return {
        isEmpty:filteredData.total ===0,
        totalItems:filteredData.total,
        totalPages:filteredData.totalPages,
        currentPage:filteredData.currentPage,
        pageSize,
        data: filteredData.data,
        summary: summaryMetrics,
        visualizations: visualizationsData,
    };
}

module.exports = 
    getDashboardData
;
