import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
mongoose.set('strictQuery', false);

const databaseURL = process.env.DATABASE_URL || "mongodb://localhost:27017/PikeDB";

export default mongoose.connect(databaseURL);