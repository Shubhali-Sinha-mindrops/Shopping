const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./db/models');
const app = express();
const routes = require('./db/routes');

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();

app.use('/', routes);

app.get("/", (req, res) => {
  res.json({ message: "This is a shopping app" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});