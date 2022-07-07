require("dotenv").config();
const mongoose = require("mongoose");
// const url = process.env.URL;

const urls = "mongodb://localhost/schoolManagementDB";

mongoose
  .connect(urls)
  .then(() => {
    console.log("database connected...");
  })
  .catch((error) => {
    console.log(error.message);
  });

module.exports = mongoose;
