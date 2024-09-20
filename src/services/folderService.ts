import mongoose from 'mongoose';
import { Folder, IFolder } from '../model/folder.model'; 

export const createFolder = async (name: string): Promise<IFolder> => {
  try {
    const folder = new Folder({ name });
    return await folder.save();
  } catch (error) {
    throw new Error(`Erro ao criar pasta:`);
  }
};

export const findAllFolder = async () : Promise<IFolder[]> =>{
  return await Folder.find().exec();
}

export const findOneFolder = async (folderId: string) : Promise<IFolder | null> =>{
  if(!mongoose.Types.ObjectId.isValid(folderId)){
    throw new Error("ID da pasta invalido")
  }

  return await Folder.findById(folderId).exec();
};

export const updateFolder = async (folderId: string, updates: Partial<IFolder>): Promise<IFolder | null> =>{
  if(!mongoose.Types.ObjectId.isValid(folderId)){
    throw new Error("ID da pasta invalido")
  }
  return await Folder.findByIdAndUpdate(folderId, updates, { new: true}).exec();
}

export const deleteFolder = async (folderId: string) : Promise<IFolder | null> =>{
  if(!mongoose.Types.ObjectId.isValid(folderId)){
    throw new Error("ID da pasta invalido")
  }

  return await Folder.findByIdAndDelete(folderId);
}