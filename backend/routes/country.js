import express from 'express'
import { countryData, stateData} from '../controller/country.js';

const router = express.Router();

router.get('/',countryData)
router.get('/states?isoname=IN',stateData)

export default router;