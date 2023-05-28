const express = require('express')
const server = express();
server.use(express.json())
const {route} = require('./routes/users')

// server.get('/',(req,res)=>{
//     res.send("this is just to check server is running")
// })

server.use('/',route)

server.listen(4000,()=>{
    console.log('server is running fine')
})