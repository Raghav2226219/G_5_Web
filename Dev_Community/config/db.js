const mongoose = require("mongoose");

const dbConnecting = async function dbConnect() {
  await mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("DB CONNECTED");
  });
}

module.exports = dbConnecting;