import express from 'express'
import './shared/services/TranslationsYup'
import { router } from './routes/routes'
import 'dotenv/config'


const server = express()

// template
server.use(express.json())

// routes
server.use(router)

export { server }