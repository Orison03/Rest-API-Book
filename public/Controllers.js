const BookModel = require("./Model");

// const listBookController = (req, res) => {
//   const books = BookModel.all();
//   res.json({ data: books });
// };
const createBookController = (req, res) => {
  const { title, author, description } = req.body;

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
// const updateBookController = (req, res) => {
//   const { title, author, description } =
//     req.body;

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
// };

module.exports = {
  //   listBookController,
  //   updateBookController,
  createBookController,
  //   deleteBookController,
};
