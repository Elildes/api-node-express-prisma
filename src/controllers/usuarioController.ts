/**
 * Este arquivo conterá as funções que serão ligadas às rotas da sua API Express.
 * Elas receberão as requisições HTTP, chamarão as funções apropriadas do usuarioService
 * e enviarão as respostas HTTP. É a camada responsável por lidar com as requisições e respostas da web.
 */
import { Request, Response } from 'express';
import { usuarioService } from '../services/usuarioService'; // Importa o serviço de usuário

export const usuarioController = {

  /**
   * [GET /users/:id] Busca um usuário pelo ID.
   */
  async getUserById(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: 'ID de usuário inválido.' });
      }

      const usuario = await usuarioService.findUserById(id);
      if (usuario) {
        // Remova a senha antes de enviar a resposta por segurança
        // Omitir explicitamente a propriedade "senha" é uma boa prática
        const { senha, ...usuarioSemSenha } = usuario;
        return res.status(200).json(usuarioSemSenha);
      } else {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }
    } catch (error) {
      console.error('Erro ao buscar usuário por ID:', error);
      // Em um ambiente de produção, evite enviar detalhes do erro diretamente ao cliente.
      // Apenas uma mensagem genérica de erro interno do servidor é suficiente.
      return res.status(500).json({ message: 'Erro interno do servidor ao buscar usuário.' });
    }
  }
};