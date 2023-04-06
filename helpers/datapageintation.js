const getFilteredData  = require('./getFilteredData');


async function datapageintation(startDate, endDate, sources, metric, csvData,pageNumber , pageSize ) {
    const filteredData =await  getFilteredData(startDate, endDate, sources, csvData,pageNumber , pageSize );
    return {
        isEmpty:filteredData.total ===0,
        totalItems:filteredData.total,
        totalPages:filteredData.totalPages,
        currentPage:filteredData.currentPage,
        pageSize,
        data: filteredData.data,
    };
}
module.exports = 
    datapageintation
;
