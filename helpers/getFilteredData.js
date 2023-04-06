//async function getFilteredData(startDate, endDate, sourcesArray, csvData) {
//    const start = new Date(startDate);
//    const end = new Date(endDate);
//
//    return csvData.filter((row) => {
//        const rowDate = new Date(row.date);
//        const isInDateRange = rowDate >= start && rowDate <= end;
//        const hasSelectedSource = !sourcesArray.length || sourcesArray.includes(row.source);
//
//        return isInDateRange && hasSelectedSource;
//    });
//}
//
//module.exports =  getFilteredData ;
function getFilteredData(startDate, endDate, sourcesArray, csvData, pageNumber = 1, pageSize = 10) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const filteredData = csvData.filter((row) => {
        const rowDate = new Date(row.date);
        const isInDateRange = rowDate >= start && rowDate <= end;
        const hasSelectedSource = !sourcesArray.length || sourcesArray.includes(row.source);

        return isInDateRange && hasSelectedSource;
    });

    const pagedData = filteredData.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);

    return {
        bdata: filteredData,
        data: pagedData,
        total: filteredData.length,
        totalPages: Math.ceil(filteredData.length / pageSize),
        currentPage: pageNumber,
        pageSize: pageSize
    };
}

module.exports = getFilteredData;
