const express = require("express");
const cors = require("cors");
const app = express();
const dbConn = require("./config/dbConn");
const userModel = require("./models/user.model");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/register", async (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const user = new userModel({
    username,
    email,
    password,
  });
  await user.save();
  res.send("User Registered Successfully!");
});

app.get("/all-orders", async (req, res) => {
  const orders = await userModel.find();
  res.send(orders);
});
app.delete("/order-delete", async (req, res) => {
  await userModel.findOneAndDelete({ username: "test" });
  res.send("Order Deleted Successfully!");
});

app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("Form Data Received!");
});

dbConn();

module.exports = app;
