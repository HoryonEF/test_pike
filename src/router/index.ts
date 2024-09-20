
import { Router } from 'express';
import * as folderController from '../controller/folderController'; 
import * as fileController from '../controller/fileCotroller';
import { upload } from "../config/multer"; 
import { uploadFileController } from "../controller/fileCotroller";

const router = Router();


router.post('/folders', folderController.createFolder);
router.post('/files', upload.single('file'), uploadFileController);

export default router;