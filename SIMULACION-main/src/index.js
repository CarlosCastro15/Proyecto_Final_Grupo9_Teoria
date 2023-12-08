import express from 'express'
import usuariosRoutes from './routes/usuarios.routes.js'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(express.json())

app.use(usuariosRoutes)

app.listen(3000)
console.log("Puerto abierto")