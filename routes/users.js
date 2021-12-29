import express from 'express';
import { allUsers, addNewUser } from '../controllers/users.js';

const router = express.Router();

// dispaly all the users
router.get('/', allUsers);

// add new user
router.post('/', addNewUser);

export default router;
