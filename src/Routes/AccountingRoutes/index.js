import express from "express";
import { postAccounting, getAccounting, getOneAccounting, patchAccounting, deleteAccounting } from "../../Controllers/Accounting/index.js";
//import { validationToken } from '../../Authorization/validation.js'

const router = express.Router();

router.post('/post', postAccounting);
router.get('/get', getAccounting);
router.get('/get/:id', getOneAccounting);
router.patch('/patch/:id', patchAccounting);
router.delete('/delete/:id', deleteAccounting);

export default router;