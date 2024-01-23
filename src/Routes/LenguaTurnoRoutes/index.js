import express from "express";
import { postLenguaTurno, getAllLenguaTurno, getOneLenguaTurno, patchLenguaTurno, deleteLenguaTurno } from '../../Controllers/LenguaTurno/index.js'

const router = express.Router();

router.post('/post', postLenguaTurno)
router.get('/get', getAllLenguaTurno)
router.get('/get/:id', getOneLenguaTurno)
router.patch('/patch/:id', patchLenguaTurno)
router.delete('/delete/:id', deleteLenguaTurno)

export default router