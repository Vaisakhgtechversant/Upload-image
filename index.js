const express=require('express')
const server=express();
const dotenv = require('dotenv');
dotenv.config();
const imgRouter=require('./routes/img.router')
server.use(express.json())


server.listen(8000,()=>{
    console.log(process.env.Dbname);
        console.log('server running...');
})




server.use('/img',imgRouter)