import {sequelize} from "../db.js";
import { DataTypes } from "sequelize";

const Joke = sequelize.define('jokes', {
    id:{
        type:DataTypes.INTEGER, autoIncrement: true, primaryKey: true,
    },
    question:{
        type:DataTypes.STRING,
        allowNull:false
    },
    answer: {
        type:DataTypes.STRING,
        allowNull:false
    },
});

export {Joke};