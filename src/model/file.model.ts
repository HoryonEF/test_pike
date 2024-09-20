import mongoose from "mongoose";

export interface IFileMetadata {
    filename: string;
    fileType: string;
    folders: mongoose.Types.ObjectId[]; 
    uploadedAt: Date;
}

const fileMetadataSchema = new mongoose.Schema<IFileMetadata>({
    filename: {
        type: String,
        required: true,
    },
    fileType: {
        type: String,
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

export const FileMetadata = mongoose.model<IFileMetadata>("FileMetadata", fileMetadataSchema);