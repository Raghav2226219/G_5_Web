const express = require("express");

const {addProfile} = require("../controllers/profileController");
const {authMiddleware} = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/",authMiddleware,addProfile)
console.log("authMiddleware:", typeof authMiddleware);
console.log("addProfile:", typeof addProfile);



module.exports = router;