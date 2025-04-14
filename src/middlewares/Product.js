import express from "express";
import runValidation from "../libraries/runValidation.js";
import { checkSchema, validationResult } from "express-validator";

const app = express();

//store
app.post(
  "/products",
  checkSchema({
    categoryId: { notEmpty: true },
    name: { notEmpty: true },
    status: { notEmpty: true },
  }),
  runValidation
);

//update
app.put(
  "/products/:id",
  checkSchema({
    id: { notEmpty: true, in: "param" },
    categoryId: { notEmpty: true },
    name: { notEmpty: true },
    status: { notEmpty: true },
  }),
  runValidation
);

//delete
app.delete(
  "/products/:id",
  checkSchema({ id: { notEmpty: true, in: "param" } }),
  runValidation
);

export default app;
