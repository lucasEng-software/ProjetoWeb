import express from 'express'
import { router } from './routes'

const app = express()

const bd = require('./repositories/Implementations/ConexaoBD')//Inicia conexão com banco de dados MYSQL





app.use(express.json())
app.use(router)
export{ app }