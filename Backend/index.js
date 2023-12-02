const express = require('express')
const app = express()
const PORT = 3001

const http = require('http').Server(app)
const cors = require('cors')
const socketIO = require('socket.io')(http,{
  cors:{
    origin:'http://localhost:5173'
  }
})

socketIO.on('connection',(socket)=>{
  console.log(`${socket.id} user connected`)
  socket.on('disconnect',()=>{
    console.log(`${socket.id} disconnect`)
  })
})

app.get('/',(req, res)=>{
  res.json({
    message: 'start server'
  })
})

http.listen(PORT,()=>{
  console.log('Server working')
})