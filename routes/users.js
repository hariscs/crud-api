import express from 'express';
import {
	allUsers,
	addNewUser,
	user,
	deleteUser,
} from '../controllers/users.js';

const router = express.Router();

// dispaly all the users
router.get('/', allUsers);

// add new user
router.post('/', addNewUser);

// get user by id
router.get('/:id', user);

// delete user
router.delete('/:id', deleteUser);

export default router;
