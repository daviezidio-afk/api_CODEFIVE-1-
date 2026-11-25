// controllers/profController.js
import * as ProfModel from '../models/profModel.js';

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

// GET /professores/sala/:sala
export const getProfessoresPorSala = (req, res) => {
    const sala = req.params.sala.trim();
    const professoresSala = ProfModel.buscarPorSala(sala);

    if (professoresSala.length > 0) {
        res.status(200).json(professoresSala);
    } else {
        res.status(404).json({
            mensagem: `Nenhum professor encontrado na sala ${sala}`
        });
    }
};

// GET /professores/cpf/:cpf
export const getProfessorPorCpf = (req, res) => {
    const cpf = req.params.cpf.trim();
    const professor = ProfModel.buscarPorCpf(cpf);

    if (professor) {
        res.status(200).json(professor);
    } else {
        res.status(404).json({
            mensagem: `Professor com CPF ${cpf} não encontrado`
        });
    }
};

// GET /professores/maior-bolsa
export const getMaiorBolsa = (req, res) => {
    const professoresMaiorBolsa = ProfModel.buscarMaiorBolsa();

    if (professoresMaiorBolsa.length > 0) {
        res.status(200).json(professoresMaiorBolsa);
    } else {
        res.status(404).json({
            mensagem: 'Nenhum professor cadastrado.'
        });
    }
};

// GET /professores/:id
export const getProfessorPorId = (req, res) => {
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
    const { nome, cpf, sala, curso, bolsa } = req.body;

    if (!nome || !cpf || !sala || !curso || bolsa === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos (nome, cpf, sala, curso, bolsa) são obrigatórios.'
        });
    }

    const novoProfessor = ProfModel.criar({ nome, cpf, sala, curso, bolsa });
    res.status(201).json(novoProfessor);
};

// PUT /professores/:id
export const putProfessor = (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, cpf, sala, curso, bolsa } = req.body;

    if (!nome || !cpf || !sala || !curso || bolsa === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos (nome, cpf, sala, curso, bolsa) devem ser informados.'
        });
    }

    const professorAtualizado = ProfModel.atualizar(id, { nome, cpf, sala, curso, bolsa });

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