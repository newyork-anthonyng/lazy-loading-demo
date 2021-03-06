const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.resolve(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.listen(3000, () => {
  console.log("Server listening on 3000");
});
