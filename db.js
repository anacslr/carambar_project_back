import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    {
        dialect:"sqlite",
        storage:"./dev.sqlite",
    }
);

const connectDB = async() => {
    await sequelize.authenticate();
    await sequelize.sync();
};

export {sequelize, connectDB};