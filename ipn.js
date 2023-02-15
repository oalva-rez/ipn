const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(verifyUser);

app.get("/ipn", (req, res) => {
  console.log(req);
  res.send("Hello World!");
});
