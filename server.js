const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./db/models');
const app = express();
const routes = require('./db/routes/index');
const route = require('./db/routes/shop');


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log("Drop and Resync Db");
  initial();
});

function initial(){
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "moderator"
  });

  Role.create({
    id: 3,
    name: "admin"
  });
}

//auth.routes
require('./db/routes/auth.routes')(app);

//user.routes
require('./db/routes/user.routes')(app);

//shopRoutes
app.use('/', route);

//userRoute
app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});