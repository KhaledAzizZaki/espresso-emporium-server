const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express());

app.get("/", (req, res) => {
  res.send("Espresso Emporium Server running");
});

app.listen(port, () => {
  console.log(`Espresso Emporium server running on port ${port}`);
});
