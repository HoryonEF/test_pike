import mongoose, { Schema, Document } from 'mongoose';


export interface IFolder extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  files: mongoose.Types.ObjectId[]; 
}


const folderSchema = new Schema<IFolder>({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  files: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'File', 
    },
  ],
});

export const Folder = mongoose.model<IFolder>('Folder', folderSchema);