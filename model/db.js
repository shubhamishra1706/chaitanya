const mysql = require('mysql')

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"chaitanya"
})

connection.connect((error)=>{
    if(error){
        console.log("error in database connection")
        res.send({"error":error})
    }
    console.log("database connected")
})

module.exports = {connection}