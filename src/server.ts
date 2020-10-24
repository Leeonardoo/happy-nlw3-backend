import express from 'express'
import 'express-async-errors'
import './database/connection'
import routes from './routes'
import path from 'path'
import errorHandler from './errors/handler'

const app = express()

app.use(express.json())
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "http://192.168.1.111:3000")
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
   next()
})
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(3333)