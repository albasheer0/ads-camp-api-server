const { isISO8601, isIn } = require('validator');

function validateInputParameters(startDate, endDate, sources, metric) {
  const errors = [];

  if (!isISO8601(startDate)) {
    errors.push({ field: 'startDate', message: 'Invalid start date format' });
  }

  if (!isISO8601(endDate)) {
    errors.push({ field: 'endDate', message: 'Invalid end date format' });
  }

  if (new Date(startDate) > new Date(endDate)) {
    errors.push({ field: 'endDate', message: 'End date must be after or equal to the start date' });
  }

  // Assuming your allowed sources are "source1", "source2", and "source3"
  const allowedSources = ['affiliate_prospecting',
'baseline',
'direct',
'display_prospecting',
'displav_retargeting',
'gooale_performance',
'organicsearch',
'organicsocial',
'paidsearch_dynamic_search_ads_prospecting',
'paid_generic_prospecting',
'paidsocial_prospecting',
'paidsocial_retargeting',
'radio',
                          'tv'];
  if (sources) {
    sources.forEach((source) => {
      if (!isIn(source, allowedSources)) {
        errors.push({ field: 'sources', message: `Invalid source: ${source}` });
      }
    });
  }

  // Assuming your allowed metrics are "attributed_conversions", "attributed_revenue", and "spends"
  const allowedMetrics = ['attributed_conversions', 'attributed_revenue', 'spends'];
  if (!isIn(metric, allowedMetrics)) {
    errors.push({ field: 'metric', message: 'Invalid metric' });
  }

    return errors;
}
module.exports =  validateInputParameters ;
