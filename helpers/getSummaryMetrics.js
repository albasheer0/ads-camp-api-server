function getSummaryMetrics(data) {
    let totalAttributedConversions = 0;
    let totalAttributedRevenue = 0;
    let totalAdSpend = 0;

    data.forEach((row) => {
        totalAttributedConversions += parseInt(row.attributed_conversions);
        totalAttributedRevenue += parseFloat(row.attributed_revenue);
        totalAdSpend += parseFloat(row.spends);
    });

    return {
        totalAttributedConversions,
        totalAttributedRevenue:parseFloat(totalAttributedRevenue).toFixed(2),
        totalAdSpend:parseFloat(totalAdSpend).toFixed(2),
    };
}
module.exports =  getSummaryMetrics ;
