import express from 'express'
import { a1, a2, a3, a4, a5, a6 } from '../controller/brand.js';

const router = express.Router();

router.get('/',a1)
router.get('/create',a2)
router.post('/',a3)
router.post('/update',a6)

router.post('/delete',a4)
router.get('/:record',a5)

export default router;