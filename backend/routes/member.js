import express from 'express'
import { member, memberData, oneMember, updateMember} from '../controller/member.js';

const router = express.Router();

router.get('/',memberData)
router.post('/',member)
router.post('/update',updateMember)
router.get('/login',oneMember)

export default router;