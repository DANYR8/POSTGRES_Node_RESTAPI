import { Router } from "express";
import { getUsers, getUserById, createUser, deleteUserById, updateUser } from '../controllers/users.controllers.js';

const router = Router();

router.get('/users', getUsers);

router.get('/users/:id', getUserById )

router.post('/users', createUser)

router.delete('/users/:id', deleteUserById)

router.put ('/users/:id', updateUser)

export default router;

/*CRUD creado para ususario */