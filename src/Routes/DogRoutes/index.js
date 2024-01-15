import express from "express";
import { postDog, getDog, getOneDog, patchDog, deleteDog } from "../../Controllers/Dog/index.js";
import { validationToken } from '../../Authorization/validation.js'

const router = express.Router();

router.post('/post',validationToken, postDog);
router.get('/get', validationToken, getDog);
router.get('/get/:id', validationToken, getOneDog);
router.patch('/patch/:id',validationToken, patchDog);
router.delete('/delete/:id',validationToken, deleteDog);

export default router;