const express = require('express');
const cheerio = require('cheerio');
const request = require('request');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/scrape', (req, res) => {
  const url = req.query.url;

  request(url, (error, response, html) => {
    if (!error) {
      const $ = cheerio.load(html);
      const images = [];

      $('img').each((index, element) => {
        images.push($(element).attr('src'));
      });

      res.setHeader('Access-Control-Allow-Origin', '*'); // Add Access-Control-Allow-Origin header
      res.json(images);
    } else {
      res.status(500).json({ error: 'Failed to scrape the page.' });
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
