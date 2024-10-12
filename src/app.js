const express = require('express')
const {config}= require('dotenv')
const mongoose = require('mongoose')
config()
const bookRouters  =require('./routes/books.route')
const bodyParser= require('body-parser')
//usamos express para los middleware
const app = express()
app.use(bodyParser.json())

//aca conectamos la base de datos
mongoose.connect(process.env.MONGO_URL,{dbName: process.env.MONGO_DB_NAME})
const db = mongoose.connections
app.use('/books',bookRouters)
const port = process.env.PORT || 3000
app.listen(port,() =>{
    console.log(`Servidor iniciado en el puerto ${port}`)
})