const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
require("dotenv/config");

const app = express();

const port = process.env.PORT || 5000;
const uri = "mongodb+srv://new_user1:qweasdzxc123@cluster0.m9tc9.mongodb.net/hot-dog?retryWrites=true&w=majority";

const postRouter = require("./routes/posts");

app.use(cors())
app.use(express.json());
app.use("/", postRouter);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected "));

app.listen(port, () => console.log("app running successfully"));
