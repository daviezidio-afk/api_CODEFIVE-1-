// routes/produtoRoutes.js
import { Router } from 'express';
import {
    getProdutos,
    getProdutosPorCategoria,
    getProdutoPorId,
    postProduto,
    putProduto,
    deleteProduto
} from '../controllers/profController.js';

const router = Router();

// O prefixo '/professores' será definido no app.js
router.get('/', getProfessores);
router.get('/curso/:curso', getProfessoresPorCurso);
router.get('/:id', getProfessorPorId);
router.post('/', postProfessor);
router.put('/:id', putProfessor);
router.delete('/:id', deleteProfessor);

export default router;
