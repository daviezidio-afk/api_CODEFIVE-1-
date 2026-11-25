// index.js
import express from 'express';
import produtoRoutes from './routes/profRoutes.js';

const app = express();
const PORT = 3000;

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Direciona todas as requisições que começam com '/professores' para o arquivo de rotas
app.use('/professores', produtoRoutes);

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});