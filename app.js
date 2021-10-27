const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes.js");
const recipeRoutes = require("./routes/recipeRoutes.js");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);

mongoose
  .connect(
    "mongodb+srv://keshav_23:keshav%4023@cluster0.iflqo.mongodb.net/recipeDB?retryWrites=true&w=majority"
  )
  .then((_) => {
    app.listen(3000, () => {
      console.log("Server Started at Port 3000 ✅");
    });
  });
