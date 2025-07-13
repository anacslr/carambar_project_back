import express from 'express';
import "dotenv/config";
import { connectDB } from '../db.js';
import { Joke } from '../models/jokes.js';
import jokesSeed from '../seed.js';
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "../swagger.js";

//conection to DB
connectDB()
await Joke.sync();
await jokesSeed();

const app= express();
const port = process.env.APP_PORT || 3310;

app.use(
  cors({
    origin: ["https://anacslr.github.io"],
  }),
);


app.use(express.json())

//using router

import router from '../routes/router.js';

app.use("/api/v1", router)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});