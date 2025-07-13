import { Joke } from "../models/jokes.js";
import { sequelize } from "../db.js";

//consulter toutes les blagues
const getAllJokes = async(req, res) => {
    try {
     const jokes = await Joke.findAll()
    res.status(200).json(jokes)   
    } catch (err) {
        res.sendStatus(500);
    } 
}

//consulter une blague
const getJokeById = async(req, res) => {
    try {
      const jokeById = await Joke.findByPk(req.params.id)
    res.status(200).json(jokeById)  
    } catch (err) {
        res.sendStatus(500);
    }
}

//consulter une blague aléatoire
const getRandomJoke = async(req, res) => {
    try {
    const randomJoke = await Joke.findOne({ order: [sequelize.literal('RANDOM()')]});
    res.status(200).json(randomJoke);    
    } catch (err) {
        res.sendStatus(500);
    }
}

//ajouter une blague
const addJoke = async(req, res) =>{
    try {
     const newJoke = await Joke.create(req.body)
    res.status(201).json(newJoke)   
    } catch (err) {
        res.sendStatus(500);
    }  
}


export default {getAllJokes, getJokeById, getRandomJoke, addJoke}