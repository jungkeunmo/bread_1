import express from "express";
import globalController from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get("/", globalController.homeController);
globalRouter.get("/bread", globalController.breadController);

export default globalRouter;