// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import Mongoose from "mongoose";
import CategoryMiddleware from "./src/middlewares/Category.js";
import Category from "./src/models/Category.js";
import Product from "./src/models/Product.js";
import dynamicCrud from "./src/routes/api.js";

const app = express();
const env = dotenv.config().parsed;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DATABASE CONNECTION
Mongoose.connect(`mongodb://localhost:27017/${env.DB_NAME}`, {
  authSource: "admin",
  user: env.DB_USERNAME,
  pass: env.DB_PASSWORD,
});

const db = Mongoose.connection;
db.on("error", (err) => {console.error(err);});
db.on("open", (err) => {console.log(`Database ${env.DB_NAME} connected!`);});

//Call Middleware
app.use(CategoryMiddleware);

//Call Dynamic CRUD
app.use("/categories", dynamicCrud(Category));
app.use("/product", dynamicCrud(Product));

app.listen(env.PORT, () => {
  console.log(`server running on port ${env.PORT}`);
});
