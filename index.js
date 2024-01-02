import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./src/Database/config.js";
import routerDog from './src/Routes/DogRoutes/index.js'
import routerPeluTurno from './src/Routes/PeluTurnoRoutes/index.js'
import routerUser from './src/Routes/UserRoutes/index.js'

const app = express();
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.json());
dotenv.config();

app.use('/dog', routerDog)
app.use('/peluturno', routerPeluTurno)
app.use('/user', routerUser)


connectDB();
app.listen(8080)