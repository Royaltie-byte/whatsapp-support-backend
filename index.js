const express = require("express");

const app = express();
const PORT = 3000;

// simple test route
app.get("/health", (req, res) => {
  res.send("OK");
});

app.get("/", (req, res) => {
  res.send("Welcome to the backend");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
