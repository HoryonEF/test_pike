import { Folder, IFolder } from '../model/folder.model'; 

export const createFolder = async (name: string): Promise<IFolder> => {
  try {
    const folder = new Folder({ name });
    return await folder.save();
  } catch (error) {
    throw new Error(`Erro ao criar pasta:`);
  }
};