import { Router } from "express";
import { getInformacion, getInformacionById, createInformacion, updateInformacion, deleteInformacion} from '../controllers/informacion.controllers.js';

const router = Router();

router.get('/informacion', getInformacion);

router.get('/informacion/:id', getInformacionById)

router.post('/informacion', createInformacion)

router.delete('/informacion/:id', deleteInformacion)

router.put ('/informacion/:id', updateInformacion)

export default router;
