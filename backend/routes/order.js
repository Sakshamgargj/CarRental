import express from 'express'
import { order,AllOrder } from '../controller/order.js';

const router = express.Router();

router.get('/',AllOrder)
router.post('/',order)

export default router;