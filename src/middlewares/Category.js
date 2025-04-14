import express from "express";
import runValidation from "../libraries/runValidation.js";
import { checkSchema, validationResult } from "express-validator";

const app = express();

//store
app.post(
  "/categories",
  checkSchema({
    name: { notEmpty: true },
    status: { notEmpty: true },
  }),
  runValidation
);

//update
app.put(
  "/categories/:id",
  checkSchema({
    id: { notEmpty: true, in: "param" },
    name: { notEmpty: true },
    status: { notEmpty: true },
  }),
  runValidation
);

//delete
app.delete(
  "/categories/:id",
  checkSchema({ id: { notEmpty: true, in: "param" } }),
  runValidation
);

export default app;
