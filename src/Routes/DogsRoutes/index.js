import express from "express";
import { validationToken } from '../../Authorization/validation.js'

const router = express.Router();

router.get('/agenda',validationToken);


export default router;