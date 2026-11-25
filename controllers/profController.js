// controllers/produtoController.js
import * as ProdutoModel from '../models/profModel.js';

// GET /professores
export const getProfessores = (req, res) => {
    const professores = ProfModel.listarTodos();
    res.status(200).json(professores);
};

// GET /professores/curso/:curso
export const getProfessoresPorCurso = (req, res) => {
    const curso = req.params.curso.trim();
    const professoresCurso = ProfModel.buscarPorCurso(curso);

    if (professoresCurso.length > 0) {
        res.status(200).json(professoresCurso);
    } else {
        res.status(404).json({
            mensagem: `Nenhum professor encontrado no curso ${curso}`
        });
    }
};

// GET /professores/:id
export const getProfesorPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const professor = ProfModel.buscarPorId(id);

    if (professor) {
        res.status(200).json(professor);
    } else {
        res.status(404).json({
            mensagem: `Professor ${id} não encontrado`
        });
    }
};

// POST /professores
export const postProfessor = (req, res) => {
    const { nome, especialidade, email, telefone } = req.body;

    if (!nome || !especialidade || !email || !telefone) {
        return res.status(400).json({
            mensagem: 'Todos os campos (nome, especialidade, email, telefone) são obrigatórios.'
        });
    }

    const novoProfessor = ProfModel.criar({ nome, especialidade, email, telefone });
    res.status(201).json(novoProfessor);
};

// PUT /professores/:id
export const putProfessor = (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, especialidade, email, telefone } = req.body;

    if (!nome || !especialidade || !email || !telefone) {
        return res.status(400).json({
            mensagem: 'Todos os campos (nome, especialidade, email, telefone) devem ser informados.'
        });
    }

    const professorAtualizado = ProfModel.atualizar(id, { nome, especialidade, email, telefone });

    if (!professorAtualizado) {
        return res.status(404).json({
            mensagem: `Professor com ID ${id} não encontrado para atualização.`
        });
    }

    res.status(200).json(professorAtualizado);
};

// DELETE /professores/:id
export const deleteProfessor = (req, res) => {
    const id = parseInt(req.params.id);
    const professorRemovido = ProfModel.remover(id);

    if (!professorRemovido) {
        return res.status(404).json({
            mensagem: `Professor com ID ${id} não encontrado para exclusão.`
        });
    }

    res.status(200).json({
        mensagem: `Professor com ID ${id} removido com sucesso.`,
        professor: professorRemovido
    });
};
