import express from "express";
import { postUSer } from '../../Controllers/User/index.js'

const router = express.Router();

router.post('/post', postUSer)
// router.get('/get', getPeluTurno)
// router.patch('/patch/:id', patchPeluTurno)
// router.delete('/delete/:id', deletePeluTurno)

export default router