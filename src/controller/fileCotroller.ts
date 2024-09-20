import { Request, Response } from 'express';
import * as fileService from '../services/fileServices';

export const createFile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { filename, fileType, size, content, folderIds } = req.body;

    if (!filename || !fileType || !size || !content) {
      res.status(400).json({ message: 'Os campos filename, fileType, size e content são obrigatórios.' });
      return;
    }

    const newFile = await fileService.createFile(filename, fileType, size, Buffer.from(content), folderIds || []);
    
    res.status(201).json(newFile);
  } catch (error) {
    console.error("Erro ao criar arquivo:", error);
    res.status(500).json({ message: 'Erro ao criar o arquivo.' });
  }
};

export const updateFile = async (req: Request, res: Response): Promise<void> => {
  try {
    const fileId = req.params.id;
    const updates = req.body;

    const updatedFile = await fileService.updateFile(fileId, updates);

    if (!updatedFile) {
      res.status(404).json({ message: 'Arquivo não encontrado.' });
      return;
    }

    res.status(200).json(updatedFile);
  } catch (error) {
    console.error("Erro ao atualizar arquivo:", error);
    res.status(500).json({ message: 'Erro ao atualizar o arquivo.' });
  }
};

export const findOneFile = async (req: Request, res: Response): Promise<void> => {
  try {
    const fileId = req.params.id;

    const file = await fileService.findOneFile(fileId);

    if (!file) {
      res.status(404).json({ message: 'Arquivo não encontrado.' });
      return;
    }

    res.status(200).json(file);
  } catch (error) {
    console.error("Erro ao encontrar arquivo:", error);
    res.status(500).json({ message: 'Erro ao encontrar o arquivo.' });
  }
};

export const findAllFiles = async (req: Request, res: Response): Promise<void> => {
  try {
    const files = await fileService.findAllFiles();
    res.status(200).json(files);
  } catch (error) {
    console.error("Erro ao listar arquivos:", error);
    res.status(500).json({ message: 'Erro ao listar arquivos.' });
  }
};

export const deleteFile = async (req: Request, res: Response): Promise<void> => {
  try {
    const fileId = req.params.id;

    const deletedFile = await fileService.deleteFile(fileId);

    if (!deletedFile) {
      res.status(404).json({ message: 'Arquivo não encontrado.' });
      return;
    }

    res.status(200).json({ message: 'Arquivo excluído com sucesso.' });
  } catch (error) {
    console.error("Erro ao excluir arquivo:", error);
    res.status(500).json({ message: 'Erro ao excluir o arquivo.' });
  }
};
