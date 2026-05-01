import { Router } from "express";
import { getEmployee, getEmployeeById, createEmployee, deleteEmployeeById, updateEmployee, findEmployeeByEmail} from '../controllers/users.controllers.js';

const router = Router();

router.get('/employee', getEmployee);

router.get('/employee/:id', getEmployeeById)

router.post('/employee', createEmployee)

router.delete('/employee/:id', deleteEmployeeById)

router.put ('/employee/:id', updateEmployee)

router.post('/employee/login', findEmployeeByEmail)


export default router;

/*CRUD creado para ususario */