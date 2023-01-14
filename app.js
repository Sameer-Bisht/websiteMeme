const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const nodemon = require('nodemon');


// Express Specific STuff
app.use(express.static('static'));
app.use(express.urlencoded());

// ENDPOINTS 
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
});



// STart the Server
app.listen(port,()=>{
    console.log(`The server started on ${port}`)
});