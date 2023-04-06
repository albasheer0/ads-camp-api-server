const request = require('supertest');
const app = require('./app').listen(); // Import the server and start it on a random available port


describe('Dashboard API', () => {
    // Close the app after each test is done
  
    
    const allowedSources = [
        'affiliate prospectino',
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
        'tv',
        ];

    const allowedMetrics = ['attributed_conversions', 'attributed_revenue', 'spends'];

    const defaultRequestParams = {
        startDate: '2022-06-01',
        endDate: '2022-08-31',
        sources: allowedSources,
        metric: allowedMetrics[0],
    };

    // Test case 1
    it('should return a successful response with the correct data structure when valid input parameters are provided', async () => {
        const response = await request(app).post('/api/data').send(defaultRequestParams);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('data');
        expect(response.body).toHaveProperty('summary');
        expect(response.body).toHaveProperty('visualizations');
        // Add more assertions to check the correctness of the data structure
    });

    // Test case 2
    it('should return a 400 (Bad Request) response when invalid input parameters are provided', async () => {
        const response = await request(app).post('/api/data').send({
            ...defaultRequestParams,
            startDate: 'invalid_date',
            metric: 'invalid_metric',
        });

        expect(response.status).toBe(400);
    });
    // Test case 3
    it('should return correct results when the date range provided includes only a single day', async () => {
        const response = await request(app).post('/api/data').send({
            ...defaultRequestParams,
            startDate: '2021-01-01',
            endDate: '2021-01-01',
        });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('data');
    });
    // Test case 4
    it('should return a validation error when the end date is earlier than the start date', async () => {
        const response = await request(app).post('/api/data').send({
            ...defaultRequestParams,
            startDate: '2021-09-31',
            endDate: '2021-01-01',})
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('errors');

    });
    // Test case 5
    it('should return correct results when the pagination settings result in empty pages', async () => {
        const response = await request(app).post('/api/data').send({
            ...defaultRequestParams,
            pageNumber: 100,
            pageSize: 10})
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('data')
        
});
});


    