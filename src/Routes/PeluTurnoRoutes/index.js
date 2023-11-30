import express from "express";
import { postPeluTurno, getPeluTurno, patchPeluTurno, deletePeluTurno } from '../../Controllers/Turnos/index.js'

const router = express.Router();

router.post('/post', postPeluTurno)
router.get('/get', getPeluTurno)
router.patch('/patch/:id', patchPeluTurno)
router.delete('/delete/:id', deletePeluTurno)

export default router