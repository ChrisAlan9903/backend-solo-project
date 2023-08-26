const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

// Load environment variables. See .env file for available variables.
// This should be done before loading variables from process.env
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

/* 
Morgan configuration that logs the following:
- the request body
- the request params
- the request query
- the time of the request
- the user agent
*/

const morganConfig = morgan(function (token, req, res) {
  return [
    JSON.stringify(req.body),
    JSON.stringify(req.params),
    JSON.stringify(req.query),
    token.date(req, res, "iso"),
    req.headers["user-agent"],
  ].join(" ");
});

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"], // Allow requests from localhost only
  methods: "GET,POST,PUT,DELETE", // Allow all types of HTTP methods
};
//Middleware
app.use(express.json());
app.use(morganConfig);
app.use(cors(corsOptions));

const sequelize = require("./config/db.config");

// Define routes here
const authRoute = require("./routes/auth.route");
const usersRoute = require("./routes/users.route");
const foodItemsRoute = require("./routes/foodItems.route");
const ordersRoute = require("./routes/orders.route");
const orderItemsRoute = require("./routes/orderItems.route");
const categoriesRoute = require("./routes/categories.route");
const vendorsRoute = require("./routes/vendors.route");
// const chatroomMemberRoute = require('./routes/chatroomMembers.route')

app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/foodItems", foodItemsRoute);
app.use("/orders", ordersRoute);
app.use("/orderItems", orderItemsRoute);
app.use("/categories", categoriesRoute);
app.use("/vendors", vendorsRoute);
// app.use('/circles', chatroomMemberRoute)

// Health check
app.get("/", (req, res) => {
  res.status(200).send({ message: `Health OK : ${process.env.NODE_ENV}` });
  // res.send(`Health OK : `, process.env.NODE_ENV)
});

//Start the server

const port = process.env.PORT || 3000;
app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.0");
    console.log(`🏎️ Server is running on PORT ${port}`);
  } catch (error) {
    console.log("Unable to connect to database:", error);
  }
});
