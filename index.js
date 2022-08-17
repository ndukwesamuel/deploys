const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./Model/Blog");
const cors = require("cors");
const { json } = require("express");
const app = express();
// const port = 5000;
const port = process.env.PORT || 5000;

// mongoose
//   .connect("mongodb://localhost:27017/Newblog")
//   .then((result) => console.log("connect db"))
//   .catch((err) => console.log(err));
// drO1Hz9Tgtg0Ztea

mongoose
  .connect(
    "mongodb+srv://samheart:drO1Hz9Tgtg0Ztea@deplo.4axl1fx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => console.log("connect db"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

// app.get("/", (req, res) => {
//   res.json("working");
// });

app.get("/", (req, res) => {
  Blog.find()
    .then((data) => {
      res.status(202).json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/test", (req, res) => {
  const blog = new Blog({
    title: "I !like Amala ",
    tag: "food",
    img: "https://www.dominionkitcheninternational.com/wp-content/uploads/2021/04/Amala-Dish.jpg",
    story: " dfkudfkdfkdjfdfjdkdjfkj",
  });

  blog
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
