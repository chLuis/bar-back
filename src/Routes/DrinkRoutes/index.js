import express from "express";
import { postDrink, getDrink, patchDrink, deleteDrink } from '../../Controllers/Drink/index.js'

const router = express.Router();

router.post('/post', postDrink);
router.get('/get', getDrink);
router.patch('/patch/:id', patchDrink);
router.delete('/delete/:id', deleteDrink);

export default router;