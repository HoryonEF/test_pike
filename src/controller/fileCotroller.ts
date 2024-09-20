
import { Request, Response } from "express";
import { uploadFile } from "../services/fileServices";

export const uploadFileController = async (req: Request, res: Response) => {
    try {
        const file = await uploadFile(req);
        res.status(200).json({
            message: "Arquivo enviado com sucesso!",
            file
        });
    } catch (error) {
        res.status(400).json({
            message: "error"
        });
    }
};

/* export const createFileController = async (req: Request, res: Response) => {
    try {
        const { filename, content } = req.body;

        if (!filename || !content) {
            return res.status(400).json({ message: "Filename e content são obrigatórios." });
        }

        
        const file = await createFile(filename, content);

        res.status(200).json({
            message: "Arquivo criado com sucesso!",
            file: {
                id: file._id,
                filename: file.filename,
                uploadDate: file.uploadDate
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Erro ao criar arquivo."
        });
    }
}; */