import express from 'express'
import { postProduct, getProducts, getOneProduct, deleteProduct, patchProduct } from '../../Controllers/Product/index.js'
import { postCollar, getCollar, getOneCollar, deleteCollar, patchCollar } from '../../Controllers/Product/Equipamiento/Collar/index.js'
import { postCorrea, getCorrea, getOneCorrea, deleteCorrea, patchCorrea } from '../../Controllers/Product/Equipamiento/Correa/index.js'
import { postPretal, getPretal, getOnePretal, deletePretal, patchPretal} from '../../Controllers/Product/Equipamiento/Pretal/index.js'

const router = express.Router()

router.post('/', postProduct)
router.get('/', getProducts)
router.get('/:id', getOneProduct)
router.patch('/:id', patchProduct)
router.delete('/:id', deleteProduct)

router.post('/collar/', postCollar)
router.get('/collar/', getCollar)
router.get('/collar/:id', getOneCollar)
router.patch('/collar/:id', patchCollar)
router.delete('/collar/:id', deleteCollar)

router.post('/correa/', postCorrea)
router.get('/correa/', getCorrea)
router.get('/correa/:id', getOneCorrea)
router.patch('/correa/:id', patchCorrea)
router.delete('/correa/:id', deleteCorrea)

router.post('/pretal/', postPretal)
router.get('/pretal/', getPretal)
router.get('/pretal/:id', getOnePretal)
router.patch('/pretal/:id', patchPretal)
router.delete('/pretal/:id', deletePretal)



export default router