import express from 'express'
import { postProduct, getProducts, getOneProduct, deleteProduct, patchProduct } from '../../Controllers/Product/index.js'
import { postCollar, getCollar, getOneCollar, deleteCollar, patchCollar } from '../../Controllers/Product/Equipamiento/Collar/index.js'
import { postCorrea, getCorrea, getOneCorrea, deleteCorrea, patchCorrea } from '../../Controllers/Product/Equipamiento/Correa/index.js'
import { postPretal, getPretal, getOnePretal, deletePretal, patchPretal} from '../../Controllers/Product/Equipamiento/Pretal/index.js'
import { postAccesorios, getAccesorios, getOneAccesorios, deleteAccesorios, patchAccesorios } from '../../Controllers/Product/Accesorios/Accesorios/index.js'
import { postRopa, getRopa, getOneRopa, deleteRopa, patchRopa } from '../../Controllers/Product/Accesorios/Ropa/index.js'

const router = express.Router()

router.post('/product', postProduct)
router.get('/product', getProducts)
router.get('/product/:id', getOneProduct)
router.patch('/product/:id', patchProduct)
router.delete('/product/:id', deleteProduct)

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

router.post('/accesorios/', postAccesorios)
router.get('/accesorios/', getAccesorios)
router.get('/accesorios/:id', getOneAccesorios)
router.patch('/accesorios/:id', patchAccesorios)
router.delete('/accesorios/:id', deleteAccesorios)

router.post('/ropa/', postRopa)
router.get('/ropa/', getRopa)
router.get('/ropa/:id', getOneRopa)
router.patch('/ropa/:id', patchRopa)
router.delete('/ropa/:id', deleteRopa)


export default router