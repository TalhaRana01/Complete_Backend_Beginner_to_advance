const mongoose = require("mongoose");

function dbConn() {
  try {
    mongoose
      .connect(process.env.DB_URL)
      .then(() => {
        console.log("Database Connected Successsfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
}

module.exports = dbConn;
