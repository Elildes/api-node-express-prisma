/**
 * (Opcional, mas Recomendado)
 * Para manter a organização, é comum ter um arquivo de rotas que conecta os controladores às URIs da API.
 */

import { Router } from 'express';
import { usuarioController } from '../controllers/usuarioController'; // Importação nomeada

const router = Router();

// Rotas para CRUD de usuários
//router.post('/', usuarioController.createNewUser);        // POST /users
//router.get('/', usuarioController.getAllUsers);           // GET /users

router.get('/:id', (req, res) => usuarioController.getUserById(req, res))  // GET /users/:id

//router.put('/:id', usuarioController.updateUser);         // PUT /users/:id
//router.delete('/:id', usuarioController.deleteUser);      // DELETE /users/:id

// Rota de autenticação
//router.post('/login', usuarioController.login);           // POST /users/login

export default router;