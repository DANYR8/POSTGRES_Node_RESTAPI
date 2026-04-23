import { Router } from "express";
import { getCustomer, getCustomerById, createCustomer, deleteCustomerById, updateCustomer} from '../controllers/customer.controllers.js';

const router = Router();

router.get('/Customer', getCustomer);

router.get('/Customer/:id', getCustomerById )

router.post('/Customer', createCustomer)

router.delete('/Customer/:id', deleteCustomerById)

router.put ('/Customer/:id', updateCustomer)

export default router;

/*CRUD creado para ususario */