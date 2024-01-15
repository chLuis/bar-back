import express from "express";
import { postLenguaUser, getLenguaUser } from '../../Controllers/LenguaUser/index.js'

const router = express.Router();

router.post('/post', postLenguaUser)
router.post('/get', getLenguaUser)
// router.patch('/patch/:id', patchPeluTurno)
// router.delete('/delete/:id', deletePeluTurno)

export default router