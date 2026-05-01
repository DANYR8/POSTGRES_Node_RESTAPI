import { Router } from "express";
import { getEmployee, getEmployeeById, createEmployee, deleteEmployeeById, updateEmployee, findEmployeeByEmail} from '../controllers/users.controllers.js';

const router = Router();

router.get('/employee', getEmployee);

router.get('/employee/:id', getEmployeeById)

router.post('/employee', createEmployee)

router.post('/employee/login', findEmployeeByEmail)

router.delete('/employee/:id', deleteEmployeeById)

router.put ('/employee/:id', updateEmployee)




export default router;

/*CRUD creado para ususario */