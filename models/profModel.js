// models/profModel.js

const professores = [
    { id: 1, nome: 'Joao Amorim', cpf: '123.456.789-00', sala: 'S1', curso: 'Desenvolvimento de Sistemas', bolsa: 1550.00 },
    { id: 2, nome: 'Beatriz Nicodra', cpf: '234.567.890-11', sala: 'S2', curso: 'Administração', bolsa: 1800.00 },
    { id: 3, nome: 'Davi Ezidio', cpf: '345.678.901-22', sala: 'S1', curso: 'Desenvolvimento de Sistemas', bolsa: 2000.00 },
    { id: 4, nome: 'Leticia Vanini', cpf: '456.789.012-33', sala: 'S3', curso: 'Informática', bolsa: 1650.00 },
    { id: 5, nome: 'Julia Ferrari', cpf: '567.890.123-44', sala: 'S2', curso: 'Administração', bolsa: 1750.00 }
];

// Retorna todos os professores
export const listarTodos = () => {
    return professores;
};

// Filtra professores por curso
export const buscarPorCurso = (curso) => {
    return professores.filter(
        p => p.curso.toLowerCase() === curso.toLowerCase()
    );
};

// Filtra professores por sala
export const buscarPorSala = (sala) => {
    return professores.filter(
        p => p.sala.toLowerCase() === sala.toLowerCase()
    );
};

// Busca um único professor pelo CPF
export const buscarPorCpf = (cpf) => {
    return professores.find(p => p.cpf === cpf);
};

// Retorna o(s) professor(es) com a maior bolsa
export const buscarMaiorBolsa = () => {
    if (professores.length === 0) return [];
    const maiorValor = Math.max(...professores.map(p => p.bolsa));
    return professores.filter(p => p.bolsa === maiorValor);
};

// Busca um único professor pelo ID
export const buscarPorId = (id) => {
    return professores.find(p => p.id === id);
};

// Cria e insere um novo professor no array
export const criar = ({ nome, cpf, sala, curso, bolsa }) => {
    const novoId = professores.length > 0 ? Math.max(...professores.map(p => p.id)) + 1 : 1;
    const novoProfessor = {
        id: novoId,
        nome,
        cpf,
        sala,
        curso,
        bolsa: parseFloat(bolsa)
    };

    professores.push(novoProfessor);
    return novoProfessor;
};

// Atualiza um professor existente pelo ID
export const atualizar = (id, { nome, cpf, sala, curso, bolsa }) => {
    const index = professores.findIndex(p => p.id === id);
    if (index === -1) return null;

    professores[index] = {
        id,
        nome,
        cpf,
        sala,
        curso,
        bolsa: parseFloat(bolsa)
    };

    return professores[index];
};

// Remove um professor pelo ID e retorna o item excluído
export const remover = (id) => {
    const index = professores.findIndex(p => p.id === id);
    if (index === -1) return null;

    const [professorRemovido] = professores.splice(index, 1);
    return professorRemovido;
};