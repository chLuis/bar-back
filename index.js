import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./src/Database/config.js";
import routerFood from './src/Routes/FoodRoutes/index.js'
import routerDrink from './src/Routes/DrinkRoutes/index.js'
import routerDog from './src/Routes/DogRoutes/index.js'

const app = express();
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json());
dotenv.config();

app.use('/food', routerFood);
app.use('/drink', routerDrink)
app.use('/dog', routerDog)


connectDB();
app.listen(8080)