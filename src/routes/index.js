const mongoose = require("mongoose");
const Book = mongoose.model("Book");
const config = require("../config/default.config");
const _ = require("lodash");

module.exports = (app) => {
  app.get("/api/v1/books", async (req, res) => {
    let pageNumber = 0;
    let limitValue = config.PAGE_SIZE;
    if (req.query.pageNumber) {
      pageNumber = _.toNumber(req.query.pageNumber);
    }
    if (req.query.limitValue) {
      limitValue = _.toNumber(req.query.limitValue);
    }
    const books = await Book.find().limit(limitValue).skip(pageNumber).cache({ expire: 3000 });

    res.json(books);
  });

  app.post("/api/v1/book", async (req, res) => {
    const { title, author, content, category, description, price } = req.body;

    if (!title || !author || !content) {
      return res.status(400).send("Missing title, author, or content");
    }

    const books = new Book({
      title,
      category,
      description,
      author,
      price,
      content,
    });

    try {
      await books.save();
      res.send(books);
    } catch (err) {
      res.status(400).send(err.message);
    }
  });
};
