const express=require('express')
const app=express();

const hostname="localhost";

const port=8000;
app.get('/',function (req,res){
 res.send('<h1>Xin Chao</h1>');
});

app.listen(port,hostname,()=>{
    console.log(`hello me, I'm running server at ${hostname}:${port}`);
})