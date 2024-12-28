const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const users = [
    {id:'1',name:'Aman',email:'aman@gmail.com'},
    {id:'2',name:'Akon',email:'akon@gmail.com'},
    {id:'3',name:'Sultana',email:'sultana@gmail.com'},
    {id:'4',name:'prity',email:'Prity@gmail.com'},
    {id:'5',name:'Layla',email:'layla@gmail.com'},
    {id:'6',name:'Jayed',email:'jayed@gmail.com'},
    {id:'7',name:'Alvi',email:'alvi@gmail.com'}
]



app.get('/', (req, res) => {
    res.send('This is my first server')
})

app.get('/users',(req,res)=>{
    res.send(users);
})

app.listen(port,() => {
    console.log(`My server is running is on: ${port}`);
})