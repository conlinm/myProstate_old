const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

const patientRouter = require("./routes/users");

app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/users", express.static(path.join(__dirname, "public")));

app.use("/users", patientRouter);
app.listen(3000);
