import { default as Book } from "../models/Book.model.js";
const getBook = async (req, res) => {
  await Book.find().then(function (book) {
    return res.send(book).status(200);
  });
};

const getBookId = async (req, res) => {
  const { id } = req.params;
  await Book.find({ _id: id }).then(function (book) {
    return res.send(book).status(200);
  });
};

const postBook = async (req, res) => {
  const { title, isbn, pageCount, publishedDate, thumbnailUrl, shortDescription, status, authors, categories } = req.body;
  await Book.create({ title, isbn, pageCount, publishedDate, thumbnailUrl, shortDescription, status, authors, categories }).then(function (book) {
    return res.send(book).status(200);
  });
};

const putBookId = async (req, res) => {
  const { id } = req.params;
  const { title, isbn, pageCount, publishedDate, thumbnailUrl, shortDescription, status, authors, categories } = req.body;

  await Book.findOneAndUpdate({ _id: id }, { title, isbn, pageCount, publishedDate, thumbnailUrl, shortDescription, status, authors, categories }).then(function () {
    Book.findOne({ _id: id }).then(function (book) {
      return res.send(book).status(200);
    });
  });
};

const deleteBookId = async (req, res) => {
  const { id } = req.params;
  await Book.deleteOne({ _id: id }).then(function (book) {
    return res.send(book).status(404);
  });
};

export { getBook, postBook, getBookId, putBookId, deleteBookId };
