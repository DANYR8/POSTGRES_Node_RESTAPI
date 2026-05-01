import { Router } from "express";
import {getSkill, getSkillById, createSkill, deleteSkill, updateSkill, getBySkill} from '../controllers/employeeSkill.controllers.js';

const router = Router();

router.get('/skill', getSkill);

router.get('/skill/search/:skill', getBySkill)

router.get('/skill/:id', getSkillById)

router.post('/skill', createSkill)

router.delete('/skill/:id', deleteSkill)

router.put ('/skill/:id', updateSkill)


export default router;
