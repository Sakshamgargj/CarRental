import express from "express";
import {root} from '../controller/root.js'

let router = express.Router();

router.get('/',root)

export default router;