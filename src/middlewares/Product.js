import express from "express";
import InputValidation from "../libraries/InputValidation.js";

const app = express();

//store
app.post(
  "/products",
  await InputValidation.validate({
    categoryId: { notEmpty: true },
    name: { notEmpty: true },
    status: { notEmpty: true },
  })
);

//update
app.put(
  "/products/:id",
  await InputValidation.validate({
    id: { notEmpty: true, in: "param" },
    categoryId: { notEmpty: true },
    name: { notEmpty: true },
    status: { notEmpty: true },
  })
);

//delete
app.delete(
  "/products/:id",
  await InputValidation.validate({ id: { notEmpty: true, in: "param" } }),
);

export default app;
