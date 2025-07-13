import express from "express";

const router = express.Router();

import jokeControllers from "../controllers/jokeControllers.js";

router.get("/blagues", jokeControllers.getAllJokes);
router.get("/blagues/random", jokeControllers.getRandomJoke);
router.get("/blagues/:id", jokeControllers.getJokeById);
router.post("/blagues", jokeControllers.addJoke);

export default router;