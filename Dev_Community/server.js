require("dotenv").config();

const express = require("express");
const dbConnect = require("./config/db");
const userRoute = require("./routes/userRoute");
const profileRoute = require("./routes/profileRoute");

// Instances
const app = express();

// Variables

const PORT = process.env.PORT || 4500;

app.use(express.json());


// Routes


app.use("/api/user", userRoute);
app.use("/api/profile/",profileRoute);

// Error Handler

app.use("/", function(req,res){
  res.status(500).send({message : "Something went wrong"});
})

// Server

dbConnect().then(() => {
  app.listen(PORT, () => {
      console.log("Server running on port: ", PORT);
    })
    // .on("error", (err) => {
    //   console.error("Server error:", err);
    // });
});
