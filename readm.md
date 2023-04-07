# Backend Application ads campaign data server api- Code Challenge

This backend application serves as the API for a marketing analytics dashboard. It provides the frontend application with necessary data related to marketing campaigns, conversions, revenues, and ad spends.

## Features

- Fetch marketing campaign data and related visualizations
- Provides paginated results for better performance and user experience
- Detailed error handling and validation
- Scalable and modular architecture

## API Reference

## Request and response

The request body should be a JSON object that conforms to the following schema:

### Request example

```json
{
  "startDate": "string",
  "endDate": "string",
  "sources": ["string"],
  "metric": "string",
  "page": "integer",
  "pageSize": "integer"
}
```

### Request Parameters

| Parameter   | Type             | Required | Description                                                                               |
| ----------- | ---------------- | -------- | ----------------------------------------------------------------------------------------- |
| `startDate` | string           | Yes      | The start date of the date range to retrieve data for, in the format `YYYY-MM-DD`.        |
| `endDate`   | string           | Yes      | The end date of the date range to retrieve data for, in the format `YYYY-MM-DD`.          |
| `sources`   | array of strings | Yes      | The sources to retrieve data from. Possible values are `"tv"`, `"radio"`, and `"online"`. |
| `metric`    | string           | Yes      | The metric to retrieve data for. Possible values like `"spends"`.                         |
| `page`      | integer          | No       | The page of results to retrieve. Defaults to `1`.                                         |
| `pageSize`  | integer          | No       | The number of results per page to retrieve. Defaults to `20`.                             |

### Response

The response object contains the following fields:

| Field            | Type    | Description                                           |
| ---------------- | ------- | ----------------------------------------------------- |
| `isEmpty`        | boolean | Indicates whether the response contains any data.     |
| `totalItems`     | integer | The total number of items that match the query.       |
| `totalPages`     | integer | The total number of pages of results.                 |
| `currentPage`    | integer | The current page of results.                          |
| `data`           | array   | An array of objects representing the requested data.  |
| `summary`        | object  | A summary of the requested data.                      |
| `visualizations` | object  | A collection of visualizations of the requested data. |

### End-points

#### Get dashboard data

Fetch marketing campaign data and related visualizations

```http
  post /api/data
```

#### Get data by page

Fetch paginated marketing campaign data

```http
  post /api/datatable
```

## Prerequisites

Before you start, make sure you have the following software installed on your machine:

- Node.js (LTS version recommended)
- npm (comes bundled with Node.js) or Yarn
- Git

## Installation

- Clone the repository
- Navigate to the project directory
- Install the dependencies:

```
npm install

```

or

```
yarn install

```

Start the server

```bash
  npm run start
```

## Running Tests

The application includes a comprehensive test suite to ensure the correctness of the API endpoints and their functionality. To run the tests, execute the following command:

```bash
npm run test
```

or

```bash
yarn test
```

The test results will be displayed in the terminal.

### Test Cases

Below is a brief explanation of the test cases included in the suite:

- Successful response with the correct data structure: This test ensures that the API returns a successful response with the correct data structure when valid input parameters are provided.

- 400 (Bad Request) response for invalid input parameters: This test checks if the API returns a 400 (Bad Request) response when invalid input parameters are provided.

- Correct results for a single day date range: This test verifies that the API returns correct results when the date range provided includes only a single day.

- Validation error for end date earlier than start date: This test ensures that the API returns a validation error when the end date is earlier than the start date.

- Correct results for empty pages due to pagination settings: This test confirms that the API returns correct results when the pagination settings result in empty pages.

## Deployment

this project is Deployed on heroku

## Demo

the api is online and you can intract with it using the postman file and can be reached on:

```
https://adscampapi.herokuapp.com/
```

## Technologies Used

- Node.js
- Express
- Jest
- Supertest
- body-parser
- cors
- csv-parser
- validator
