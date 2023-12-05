import express from "express";
import { postUSer, getUser } from '../../Controllers/User/index.js'

const router = express.Router();

router.post('/post', postUSer)
router.get('/get', getUser)
// router.patch('/patch/:id', patchPeluTurno)
// router.delete('/delete/:id', deletePeluTurno)

export default router