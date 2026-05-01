import { Router } from "express";
import { getCustomer, getCustomerById, createCustomer, deleteCustomerById, updateCustomer,findCustomerByEmail} from '../controllers/customer.controllers.js';

const router = Router();

router.get('/Customer', getCustomer);

router.get('/Customer/:id', getCustomerById )

router.post('/Customer', createCustomer)

router.delete('/Customer/:id', deleteCustomerById)

router.put ('/Customer/:id', updateCustomer)

router.post('/customer/login', findCustomerByEmail)

export default router;

/*CRUD creado para ususario */