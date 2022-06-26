const mongoose = require("mongoose");
const dbConnect = () => {
  const dbconStr = process.env.MONGODB_URL;

  mongoose.connect(dbconStr, () => {
        console.log("Database Connected");
  })
};

module.exports = { dbConnect }