
export interface UploadedFile extends Express.Multer.File {
    id?: string; 
    _id?: string; 
    bucketName: string; 
}
