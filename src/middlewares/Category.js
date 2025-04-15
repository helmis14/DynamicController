import express from "express";
import InputValidation from "../libraries/InputValidation.js";
// import runValidation from "../libraries/runValidation.js";
// import { checkSchema, validationResult } from "express-validator";

const app = express();

//app.post(path, middleware, eksekusi)

//store
app.post(
  "/categories",
  await InputValidation.validate({
    name: { notEmpty: true },
    status: { notEmpty: true },
  })
);

//update
app.put(
  "/categories/:id",
  await InputValidation.validate({
    id: { notEmpty: true, in: "param" },
    name: { notEmpty: true },
    status: { notEmpty: true },
  })
);

//delete
app.delete(
  "/categories/:id",
  await InputValidation.validate({ id: { notEmpty: true, in: "param" } })
);

export default app;
