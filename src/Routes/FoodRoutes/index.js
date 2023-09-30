import express from "express";
import { postFood, getFood, patchFood, deleteFood } from '../../Controllers/Food/index.js'

const router = express.Router();

router.post('/post', postFood);
router.get('/get', getFood);
router.patch('/patch/:id', patchFood);
router.delete('/delete/:id', deleteFood);

export default router;