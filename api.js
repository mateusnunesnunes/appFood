const Fat = require('fatsecret');
const express = require('express');
var cors = require('cors');


const fat = new Fat('bcc67bc6b1ab4d8e8acdb999f4288c62', '64b17dccf25c433b830717b2a364c589');
const app = express();
app.use(cors());

app.get('/foods/search/:name/:pageNumber/:maxResults', async (req, res, next) => {
  try {
    const results = await fat.method('foods.search', {
      search_expression: req.params.name,
      page_number: req.params.pageNumber,
      max_results: req.params.maxResults
    });
    res.json(results);
  } catch(err) {
    next(err);
  }
});
app.listen(1337, () => {
  console.log('listening on 1337');
});
