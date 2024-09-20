import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';


const storage = new GridFsStorage({
    url: process.env.DATABASE_URL || "mongodb://localhost:27017/PikeDB",
    file: (req, file) => {
        return {
            filename: file.originalname,
            bucketName: 'uploads'
        };
    }
});

export const upload = multer({ storage });
