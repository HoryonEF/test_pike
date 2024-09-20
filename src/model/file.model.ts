import mongoose, { Schema, Document } from "mongoose";

export interface IFile extends Document {
    filename: string;
    fileType: string;
    size: number; 
    content: Buffer; 
    folders: mongoose.Types.ObjectId[]; 
    uploadedAt: Date; 
}

const fileSchema = new Schema<IFile>({
    filename: {
        type: String,
        required: true,
        trim: true,
    },
    fileType: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    content: {
        type: Buffer,
        required: true,
    },
    folders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Folder",
    }],
    uploadedAt: {
        type: Date,
        default: Date.now,
    },
});

export const File = mongoose.model<IFile>("File", fileSchema);
