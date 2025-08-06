require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const userRoute = require("./routes/userRoute");

// Instances
const app = express();

// Variables

const PORT = process.env.PORT || 4500;

app.use(express.json());

app.use(function(req,res,next){
  console.log("THIS IS GLOBAL APP MIDDLWARE");
  next()
})

// Routes

app.get(("/"),(req,res) => {
  res.send({message: "Dashboard"});
})

app.use("/api/user", userRoute);


// Server


async function dbConnect() {
  await mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("DB CONNECTED");
  });
}

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
  });
});
