// controllers/folderController.ts
import { Request, Response } from 'express';
import * as folderService from '../services/folderService'; // Ajuste o caminho

export const createFolder = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body; // Supomos que o nome da pasta será enviado no corpo da requisição
    if (!name) {
      res.status(400).json({ message: 'O campo nome é obrigatório.' });
      return;
    }

    const newFolder = await folderService.createFolder(name);
    res.status(201).json(newFolder);
  } catch (error) {
    res.status(500).json({ message: 'error'});
  }
};