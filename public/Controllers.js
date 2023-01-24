const BookModel = require("./Model");

const listBookController = (req, res) => {
  const { id } = req.params;

  if (id) {
    BookModel.find({ _id: id })
      .then((books) => {
        res.json({ data: books });
      })
      .catch((err) => console.log(err));
  } else {
    BookModel.find()
      .then((books) => {
        res.json({ data: books });
      })
      .catch((err) => console.log(err));
  }
};
const createBookController = (req, res) => {
  const {title, author, description } = req.body;

  const book = new BookModel({
    title,
    author,
    description,
  });

  book
    .save()
    .then((result) => {
      res.json({ message: "create successful", data: result });
    })
    .catch((error) => console.log(error));
};
const updateBookController = (req, res) => {
  const {id, title, author, description } = req.body;
  BookModel.findById(id)
    .then((book) => {
      if (book) {
        book.title = title;
        book.author = author;
        book.description = description;

        book.save();
        res.json({ message: "update successful", data: book });
      }
      res.json({ message: "Document cannot be found" });
    })
    .catch((err) => console.log(err));

  //   const updatedBook = BookModel.update({
  // title,
  // author,
  // description
  //   });

  //   res.json({ message: "update successful", data: updatedBook });
  // };
  // const deleteBookController = (req, res) => {
  //   const { title } = req.body;
  //   const deletedBook = BookModel.delete({ title });
  //   res.json({ message: "delete successful", data: deletedBook });
};

module.exports = {
  listBookController,
  updateBookController,
  createBookController,
  //   deleteBookController,
};
