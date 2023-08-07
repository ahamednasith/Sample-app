const express = require('express');
const cors =require('cors');
const phoneRoute = require('./routes/phone.router');
const app =express();
const port = 6123;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',phoneRoute);

app.listen(port,() => {
    console.log(`Server Is Running On ${port}`);
})