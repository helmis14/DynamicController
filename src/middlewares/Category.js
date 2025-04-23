import express from "express";
import InputValidation from "../libraries/InputValidation.js";

const app = express();

//app.post(path, middleware, eksekusi)

//store
app.post(
  "/categories",
  await InputValidation.validate({
    name: { notEmpty: true },
    status: { notEmpty: true }
  }))

//update
app.put(
  "/categories/:id",
  await InputValidation.validate({
    name: { notEmpty: true },
    status: { notEmpty: true }
  }))

//delete
app.delete(
  "/categories/:id",
  await InputValidation.validate({ id: { notEmpty: true, in: "param" } })
);

export default app;
