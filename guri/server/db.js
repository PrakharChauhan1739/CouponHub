const mongoose = require("mongoose");
const mongoURI =
  "mongodb://localhost:27017/newcoupon";

const connectDB = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongo Sucessfully");
  });
};

module.exports = connectDB;