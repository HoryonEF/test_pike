import mongoose from "mongoose";
import { IFile, File } from "../model/file.model";


export const createFile = async (
  filename: string,
  fileType: string,
  size: number,
  content: Buffer,
  folderIds: string[]
): Promise<IFile> => {
  const folders = folderIds.map((id) => new mongoose.Types.ObjectId(id));

  const newFile = new File({
    filename,
    fileType,
    size,
    content,
    folders,
    uploadedAt: new Date(),
  });


  return await newFile.save();
};

export const updateFile = async (
    fileId: string,
    updates: Partial<IFile>
  ): Promise<IFile | null> => {
    if (!mongoose.Types.ObjectId.isValid(fileId)) {
      throw new Error("ID de arquivo inválido.");
    }
  
    return await File.findByIdAndUpdate(fileId, updates, { new: true }).exec();
  };
  
  export const findOneFile = async (fileId: string): Promise<IFile | null> => {
    if (!mongoose.Types.ObjectId.isValid(fileId)) {
      throw new Error("ID de arquivo inválido.");
    }
  
    return await File.findById(fileId).exec();
  };
  
  export const findAllFiles = async (): Promise<IFile[]> => {
    return await File.find().exec();
  };
  
  export const deleteFile = async (fileId: string): Promise<IFile | null> => {
    if (!mongoose.Types.ObjectId.isValid(fileId)) {
      throw new Error("ID de arquivo inválido.");
    }
  
    return await File.findByIdAndDelete(fileId).exec();
  };