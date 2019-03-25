const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Books
      .find(req.query)
      .sort({ date: -1 })
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Books
      .findById(req.params.id)
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Books
      .create(req.body)
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(422).json(err));
  },
  saveBook: function(req, res) {
    db.Books
      .create(req.body)
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.Books
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Books
      .findById({ _id: req.params.id })
      .then(dbBooks => dbBooks.remove())
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(422).json(err));
  }
};