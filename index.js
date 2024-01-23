import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./src/Database/config.js";
import routerDog from './src/Routes/DogRoutes/index.js'
import routerLenguaTurno from './src/Routes/LenguaTurnoRoutes/index.js'
import routerLenguaUser from './src/Routes/LenguaUserRoutes/index.js'
import routerDogs from "./src/Routes/DogsRoutes/index.js";

const app = express();
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

app.use(express.json());
dotenv.config();

app.use('/dog', routerDog)
app.use('/lenguaturno', routerLenguaTurno)
app.use('/lenguauser', routerLenguaUser)

//Routes pages
app.get('/dogs', routerDogs)

connectDB();
app.listen(8080)