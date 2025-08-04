require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const userRoute = require("./routes/userRoute");

// Instances
const app = express();

// Variables

const PORT = process.env.PORT || 4500;
const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;

// Routes
app.use("/api/user", userRoute);










// Server

const serverStarted = async () => {
  try {
    await mongoose
      .connect(DATABASE_URL)
      .then(() => console.log(`DB CONNECTED : ${DATABASE_NAME}`));
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};


serverStarted();
