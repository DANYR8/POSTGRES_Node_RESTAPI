import { Router } from "express";
import { getTask, getTaskById, createTask, deleteTaskById, updateTask} from '../controllers/task.controllers.js';

const router = Router();

router.get('/task', getTask);

router.get('/task/:id', getTaskById)

router.post('/task', createTask)

router.delete('/task/:id', deleteTaskById)

router.put ('/task/:id', updateTask)

export default router;
