
import { Router } from 'express';
import * as folderController from '../controller/folderController'; 
import * as fileController from '../controller/fileCotroller'; 

const router = Router();


router.post('/folders', folderController.createFolder);
router.get('/folders', folderController.findAllFolder);
router.get('/folders/:id', folderController.findOneFolder);
router.put('/folders/:id', folderController.updateFolder);
router.delete('/folders/:id',folderController.deleteFolder);

router.post('/files', fileController.createFile);
router.get("/files", fileController.findAllFiles);
router.get("/files/:id", fileController.findOneFile);
router.put("/files/:id", fileController.updateFile);
router.delete("/files/:id", fileController.deleteFile);

export default router;