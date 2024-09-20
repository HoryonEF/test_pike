// controllers/folderController.ts
import { Request, Response } from 'express';
import * as folderService from '../services/folderService'; 


export const createFolder = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body; 
    if (!name) {
      res.status(400).json({ message: 'O campo nome é obrigatório.' });
      return;
    }

    const newFolder = await folderService.createFolder(name);
    res.status(201).json(newFolder);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error"});
  }
};

export const findAllFolder = async (req: Request, res: Response) : Promise<void> =>{
  try{
    const folders = await folderService.findAllFolder();
    res.status(200).json(folders);
  }catch(error){
    res.status(500).json({message: "Internal Server Error"});
  }
}

export const findOneFolder = async (req: Request, res:Response): Promise<void> =>{
  try{
    const folderId = req.params.id;

    const folder = await folderService.findOneFolder(folderId);

    if(!folder){
      res.status(404).json({message: "Pasta não encontrada"})
      return
    }

    res.status(200).json(folder)
  }catch(error){
    res.status(500).json({message: "Internal Server Error"});
  }
}

export const updateFolder = async (req: Request, res: Response): Promise<void> => {
  try {
    const folderId = req.params.id;
    const updates = req.body;

    const updatedFolder = await folderService.updateFolder(folderId, updates);

    if (!updatedFolder) {
      res.status(404).json({ message: 'Pasta não encontrado.' });
      return;
    }

    res.status(200).json(updatedFolder);
  } catch (error) {
    console.error("Erro ao atualizar pasta:", error);
    res.status(500).json({ message: 'Erro ao atualizar a pasta.' });
  }
};

export const deleteFolder = async (req: Request, res: Response): Promise<void> => {
  try {
    const folderId = req.params.id;

    const deleteFolder = await folderService.deleteFolder(folderId);

    if (!deleteFolder) {
      res.status(404).json({ message: 'Pasta não encontrado.' });
      return;
    }

    res.status(200).json({ message: 'Pasta excluído com sucesso.' });
  } catch (error) {
    console.error("Erro ao excluir pasta:", error);
    res.status(500).json({ message: 'Erro ao excluir a pasta.' });
  }
};