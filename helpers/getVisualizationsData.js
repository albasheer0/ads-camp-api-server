function getVisualizationsData(data, metric) {
    const lineChartData = data.map((row) => ({
        date: row.date,
        value: parseFloat(row[metric]).toFixed(2),
    }));

    const barChartData = {};
    const pieChartData = {};
    const stackedBarChartData = {};
    const heatmapData = {};
    const bubbleChartData = [];
    const areaChartData = {};

    data.forEach((row) => {
        if (!barChartData[row.source]) {
            barChartData[row.source] = parseFloat(row[metric]);
            pieChartData[row.source] = parseFloat(row[metric]);
            stackedBarChartData[row.source] = { date: row.date, value: parseFloat(row[metric]) };
            heatmapData[row.source] = { date: row.date, value: parseFloat(row[metric]) };
            areaChartData[row.source] = { date: row.date, value: parseFloat(row[metric]) };
        } else {
            barChartData[row.source] += parseFloat(row[metric]);
            pieChartData[row.source] += parseFloat(row[metric]);
            stackedBarChartData[row.source].value += parseFloat(row[metric]);
            heatmapData[row.source].value += parseFloat(row[metric]);
            areaChartData[row.source].value += parseFloat(row[metric]);
        }

        bubbleChartData.push({
            source: row.source,
            conversions: parseFloat(row.attributed_conversions),
            revenue: parseFloat(row.attributed_revenue),
            adSpend: parseFloat(row.spends),
        });
    });

    const barChartDataArray = Object.entries(barChartData).map(([source, value]) => ({ source, value: value.toFixed(2) }));
    const pieChartDataArray = Object.entries(pieChartData).map(([source, value]) => ({ source, value: value.toFixed(2) }));
    const stackedBarChartDataArray = Object.entries(stackedBarChartData).map(([source, data]) => ({ source, data }));
    const heatmapDataArray = Object.entries(heatmapData).map(([source, data]) => ({ source, data }));
    const areaChartDataArray = Object.entries(areaChartData).map(([source, data]) => ({ source, data }));

    return {
        lineChartData,
        barChartData: barChartDataArray,
        pieChartData: pieChartDataArray,
        stackedBarChartData: stackedBarChartDataArray,
        bubbleChartData,
        areaChartData: areaChartDataArray,
    };
}

module.exports = getVisualizationsData;
