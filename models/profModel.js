// models/profModel.js

// Base de dados em memória (antes ficava em produtos.js)
const professores = [
 {professor: 'Joao Amorim', cpf: '123.456.789-00', sala: 'S1', curso: 'Desenvolvimento de Sistemas', bolsa: 1550.00 },
    {professor: 'Beatriz Nicodra', cpf: '234.567.890-11', sala: 'S2', curso: 'Administração', bolsa: 1800.00 },
    {professor: 'Davi Ezidio', cpf: '345.678.901-22', sala: 'S1', curso: 'Desenvolvimento de Sistemas', bolsa: 2000.00 },
    {professor: 'Leticia Vanini', cpf: '456.789.012-33', sala: 'S3', curso: 'Informática', bolsa: 1650.00 },
    {professor: 'Julia Ferrari', cpf: '567.890.123-44', sala: 'S2', curso: 'Administração', bolsa: 1750.00 }
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

// Busca um único professor pelo ID
export const buscarPorId = (id) => {
    return professores.find(p => p.id === id);
};

// Cria e insere um novo professor no array
export const criar = ({ nome, curso, cpf, bolsa }) => {
    const novoProfessor = {
        id: professores.length + 1,
        nome,
        curso,
        cpf,
        bolsa,
    };

    professores.push(novoProfessor);
    return novoProfessor;
};

// Atualiza um professor existente pelo ID
export const atualizar = (id, { nome, curso, cpf, bolsa }) => {
    const index = professores.findIndex(p => p.id === id);
    if (index === -1) return null;

    professores[index] = {
        id,
        nome,
        curso,
        cpf,
        bolsa
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