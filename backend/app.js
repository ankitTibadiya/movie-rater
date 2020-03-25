const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "qwertyu",
      title: "First Post",
      content: "Some content"
    },
    {
      id: "qwert88yu",
      title: "Second Post",
      content: "Some more content..!!"
    }
  ];
  res.status(200).json({
    message: "Posts fetched sucessfully",
    posts
  });
});

module.exports = app;
