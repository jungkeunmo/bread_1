import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import mongoose from "mongoose";
import globalRouter from "./router/globalRouter";
import connect from "../db/mongo";

const PORT = process.env.PORT;
const app = express();

app.use(morgan(`dev`));
app.set("view engine", "pug");
connect();
mongoose.connect();

app.use("/", globalRouter);

app.listen(PORT, () => {
    console.log(`${PORT} 서버 시작함`);
});