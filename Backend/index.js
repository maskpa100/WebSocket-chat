const express = require('express')
const app = express()
const PORT = 3001

app.get('/',(req, res)=>{
  res.json({
    message: 'start server'
  })
})
app.listen(PORT,()=>{
  console.log('Server working')
})