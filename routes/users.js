const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("/Users/michaelconlin/myProstate/public/patient.html");
});
router.get("/register", (req, res) => {
  res.sendFile("/Users/michaelconlin/myProstate/public/register.html");
});
router.post("/", (req, res) => {
  res.send("Create a new user");
});
router.get("/:id", (req, res) => {
  res.send("Get user with id: " + req.params.id);
});
module.exports = router;
