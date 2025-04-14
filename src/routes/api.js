import express from "express";
import DynamicController from "../controllers/DynamicController.js";

const dynamicCrud = (model) => {
  const router = express.Router();
  const dynamicController = new DynamicController(model);

  router.get("/", dynamicController.index); //get all
  router.get("/:id", dynamicController.show); //get one
  router.post("/", dynamicController.store); //create
  router.put("/:id", dynamicController.update); //update
  router.delete("/:id", dynamicController.delete); //delete

  return router;
};

export default dynamicCrud;