const express = require("express");
const router = express.Router();
const Posts = require("../modal/Posts");


router.get("/", (req, res) => {
  Posts.find()
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json("Request get Failed"));
});

router.post("/", (req, res) => {
  const { name, type, description, image } = req.body;
  const post = new Posts({
    name,
    type,
    description,
    image
  });
  post
    .save()
    .then((resp) => res.status(201).json(resp))
    .catch((err) => res.status(400).json("Request post Failed"));
});

router.delete("/:id", (req, res) => {
  Posts.remove({ _id: req.params.id })
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json("Request delete Failed"));
});

router.get("/:id", (req, res) => {
  Posts.findById(req.params.id)
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json("Request get id Failed"));
});

router.patch("/:id", (req, res) => {
  Posts.updateOne({ _id: req.params.id }, { $set: req.body })
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json("Request patch id Failed"));
});

module.exports = router;
