import express from 'express';
import userRoutes from './routes/usuarioRoutes'; // Importa as rotas de usuário
//import { usuarioService } from './services/usuarioService'; // Para desconectar o Prisma

/**
 *  Responsável por configurar a aplicação Express (middlewares, rotas, etc.)
 */

const app = express();

// Middleware para parsear JSON no corpo das requisições
app.use(express.json());

// Usar as rotas de usuário (montar roteadores)
app.use('/users', userRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('TESTE: API de Usuários com Prisma ORM e Express!');
});

// Mensagem mais específica para o que este arquivo faz
console.log('Aplicação Express configurada.');

// Exporta a instância 'app' como a exportação padrão do módulo
export default app;