require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, Review } = require('./models');

const app = express();
const PORT = 5000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  try {
    const reviews = await Review.findAll({ order: [['createdAt', 'DESC']] });
    res.render('index', { reviews });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});

app.post('/add-review', async (req, res) => {
  try {
    const { category, title, author, rating, feedback, reviewer } = req.body;
    await Review.create({ category, title, author, rating, feedback, reviewer });
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send("Could not save the review.");
  }
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error("Failed to connect to DB:", err);
});
