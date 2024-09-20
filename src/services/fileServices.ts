
import { Request } from "express";
import { GridFsStorage } from "multer-gridfs-storage";
import mongoose from "mongoose";
import { GridFSBucket } from "mongodb";


const connection = mongoose.connect(process.env.DATABASE_URL || "mongodb://localhost:27017/PikeDB");

/* const bucket = new GridFSBucket(mongoose.connection.db, {
    bucketName: 'uploads' 
});


export const createFile = async (filename: string, content: string) => {
    return new Promise((resolve, reject) => {
        const uploadStream = bucket.openUploadStream(filename);

        
        uploadStream.end(Buffer.from(content, 'utf-8'), (error: any, file: unknown) => {
            if (error) {
                return reject(error); 
            }
            resolve(file); 
        });
    });
}; */

const storage = new GridFsStorage({
    url: process.env.DATABASE_URL || "mongodb://localhost:27017/PikeDB",
    file: (req, file) => {
        return {
            filename: file.originalname,
            bucketName: 'uploads'
        };
    }
});


export const uploadFile = async (req: Request) => {
    if (!req.file) {
        throw new Error("Nenhum arquivo foi enviado.");
    }

  
    return req.file;
};