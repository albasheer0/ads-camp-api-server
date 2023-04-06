const campaignRouter = require('./routes/campaigns');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(campaignRouter)

const PORT = process.env.PORT || 3000

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = app;
