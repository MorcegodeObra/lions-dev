import express from "express"
import connectDB from "./src/config/db.js"
import rotas from "./src/routes/router.js"
import cors from "cors"

connectDB();

const app = express();
app.use(cors())
app.use(express.json());

app.use("/",rotas);
//app.use("/mortes",rotaMorto);
//app.use("/enterro",rotaEnterro);

const porta = 4000
app.listen(porta,()=>{
    console.log(`Rodando na porta ${porta}`)
})
