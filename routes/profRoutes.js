// routes/profRoutes.js
import { Router } from 'express';
import {
    getProfessores,
    getProfessoresPorCurso,
    getProfessoresPorSala,
    getProfessorPorCpf,
    getMaiorBolsa,
    getProfessorPorId,
    postProfessor,
    putProfessor,
    deleteProfessor
} from '../controllers/profController.js';

const router = Router();

router.get('/', getProfessores);
router.get('/maior-bolsa', getMaiorBolsa);
router.get('/curso/:curso', getProfessoresPorCurso);
router.get('/sala/:sala', getProfessoresPorSala);
router.get('/cpf/:cpf', getProfessorPorCpf);
router.get('/:id', getProfessorPorId);
router.post('/', postProfessor);
router.put('/:id', putProfessor);
router.delete('/:id', deleteProfessor);

export default router;