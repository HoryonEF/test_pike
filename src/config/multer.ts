import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import mongoose from 'mongoose';

const connection = mongoose.connect(process.env.DATABASE_URL || "mongodb://localhost:27017/PikeDB");

mongoose.connection.once('open', () => {
    console.log('Conectado ao MongoDB com sucesso.');
}).on('error', (error) => {
    console.error('Erro de conexão com MongoDB:', error);
});

// Definir o GridFsStorage com Multer
const storage = new GridFsStorage({
    url: process.env.DATABASE_URL || "mongodb://localhost:27017/PikeDB",
    file: (req, file) => {
        return {
            filename: file.originalname,
            bucketName: 'uploads'
        };
    }
});
// Exportar o upload configurado com multer
export const upload = multer({ storage });
