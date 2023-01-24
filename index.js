const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const server = express();
const {
  listBookController,
  createBookController,
  updateBookController,
  deleteBookController,
} = require("./public/Controllers");

server.use(bodyParser.json());

// server.get("/book", listBookController);
server.post("/book", createBookController);
// server.put("/book", updateBookController);
// server.delete("/book", deleteBookController);

// connect to database
mongoose
  .connect(
    "mongodb+srv://rest-API-book:book1122@cluster0.mqc5zhr.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    server.listen(5000, "localhost", () => {
      console.log("server is ready to ball");
    });
  })
  .catch((err) => console.log(err));
