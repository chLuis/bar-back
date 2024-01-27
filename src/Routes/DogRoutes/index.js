import express from "express";
import { postDog, getDog, getOneDog, patchDog, patchDogOnlyLastVisit, deleteDog } from "../../Controllers/Dog/index.js";
import { validationToken } from '../../Authorization/validation.js'

const router = express.Router();

router.post('/post', postDog);
router.get('/get', getDog);
router.get('/get/:id', getOneDog);
router.patch('/patch/:id', patchDog);
router.patch('/patchLastVisit/:id', patchDogOnlyLastVisit);
router.delete('/delete/:id', deleteDog);

export default router;