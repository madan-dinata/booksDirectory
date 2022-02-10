import { default as Book } from "../models/Book.model.js";
const getBook = async (req, res) => {
  await Book.find().then(
    (book) => res.status(200).send(book),
    (error) => res.status(404).send(error.message)
  );
};

const getBookId = async (req, res) => {
  const { id } = req.params;
  await Book.find({ _id: id }).then(
    (book) => res.status(200).send(book),
    (error) => res.status(404).send(error.message)
  );
};

const postBook = async (req, res) => {
  await Book.create(req.body).then(
    (book) => res.status(201).send(book),
    (error) => res.status(404).send(error.message)
  );
};

const putBookId = async (req, res) => {
  const { id } = req.params;
  const { title, isbn, pageCount, publishedDate, thumbnailUrl, shortDescription, status, authors, categories } = req.body;

  await Book.findOneAndUpdate({ _id: id }, { title, isbn, pageCount, publishedDate, thumbnailUrl, shortDescription, status, authors, categories }, { new: true }).then(
    (book) => res.status(200).send(book),
    (error) => res.status(404).send(error.message)
  );
};

const deleteBookId = async (req, res) => {
  const { id } = req.params;
  await Book.deleteOne({ _id: id }).then(
    (book) => res.status(200).send(book),
    (error) => res.status(404).send(error.message)
  );
};

export { getBook, postBook, getBookId, putBookId, deleteBookId };
