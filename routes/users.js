import express from 'express';
import { allUsers } from '../controllers/users.js';

const router = express.Router();

// dispaly all the users
router.get('/', allUsers);

export default router;
