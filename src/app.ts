import  express  from "express"
import cors from "cors"
import  connection from "./config/database"
import { error } from "console"
import router from "./router"
const app = express()

app.use(cors())

app.use(express.json())

app.use(router)

const port=3000

connection.then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });
}).catch((error) => {
    console.log("Erro ao conectar ao banco de dados:", error);
});