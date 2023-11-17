import express from "express";
import { postDog, getDog, patchDog, deleteDog } from "../../Controllers/Dog/index.js";

const router = express.Router();

router.post('/post', postDog);
router.get('/get', getDog);
router.patch('/patch/:id', patchDog);
router.delete('/delete/:id', deleteDog);

export default router;