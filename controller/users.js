const {connection} = require('../model/db')

const getdata = async(req,res)=>{
    const squery = 'SELECT * FROM users';
    connection.query(squery,(error,result)=>{
        if(error){
            res.send(error)
        }
        res.send({"response":result})
    })
}



module.exports = {getdata}
