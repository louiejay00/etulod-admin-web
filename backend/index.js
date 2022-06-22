const port =  3000;
const express = require('express');
const cors= require('cors');
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./router/user.js");
const driverRoutes = require("./router/driver.js");
const fareRoutes = require("./router/fare.js");
const logsRoute = require("./router/logs.js");
const queueRoute = require("./router/queue");
const adminRoute = require("./router/admin");
const processRoute = require("./router/process");

app.use(express.json());
app.use(cors());

const corsOptions ={
  origin:'https://etulod-admin-web.herokuapp.com/', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "get, head, patch,post,put, delete,");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  next();
  });
//DB URL||URI
const CONNECTION_URL =
  "mongodb+srv://root:root@cluster0.pkf1s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//Connection Part
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

  app.use(express.static('routes'));

app.get('/', (req, res) => {
  res.send('Server Running .....')
});

app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  next();
  });

// User Routes
app.use("/user", userRoutes);
//Driver Routes
app.use("/driver", driverRoutes);
//fare Routes
app.use("/fare", fareRoutes);
//Logs Routess
app.use("/log", logsRoute);
app.use("/process", processRoute);
app.use("/queue", queueRoute);
app.use("/admin", adminRoute);
app.listen(port, () => console.log("Running on port 5000"));
