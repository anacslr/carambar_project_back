import express from "express";

const router = express.Router();

import jokeControllers from "../controllers/jokeControllers.js";
/**
 * @swagger
 * /blagues:
 *   get:
 *     summary: Retourne toutes les blagues
 *     tags:
 *       - Blagues
 *     responses:
 *       200:
 *         description: Liste de toutes les blagues
 *         content:
 *           application/json:
 *             schema:
 *              type: array
 *               items:
 *                 $ref: '#/components/schemas/Joke'
 */
router.get("/blagues", jokeControllers.getAllJokes);
/**
 * @swagger
 * /blagues/random:
 *   get:
 *     summary: Retourne une blague aléatoire
 *     tags:
 *       - Blagues
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: Aucune blague trouvée
 */
router.get("/blagues/random", jokeControllers.getRandomJoke);
/**
 * @swagger
 * /blagues/{id}:
 *   get:
 *     summary: Retourne une blague par son ID
 *     tags:
 *       - Blagues
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la blague
 *     responses:
 *       200:
 *         description: Blague trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: Blague non trouvée
 */
router.get("/blagues/:id", jokeControllers.getJokeById);
/**
 * @swagger
 * /blagues:
 *   post:
 *     summary: Ajoute une nouvelle blague
 *     tags:
 *       - Blagues
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - answer
 *             properties:
 *               question:
 *                 type: string
 *                 example: "Pourquoi les poules n'ont-elles pas de seins ?"
 *               answer:
 *                 type: string
 *                 example: "Parce que les coqs n'ont pas de mains !"
 *     responses:
 *       201:
 *         description: Blague créée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       400:
 *         description: Requête invalide
 */
router.post("/blagues", jokeControllers.addJoke);

export default router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Joke:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         question:
 *           type: string
 *           example: "Pourquoi les canards ont-ils autant de plumes ?"
 *         answer:
 *           type: string
 *           example: "Pour couvrir leur derrière !"
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */