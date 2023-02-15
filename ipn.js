const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/ipn", (req, res) => {
  console.log(req);
  res.send("Hello World!");
});
