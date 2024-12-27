const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');



// MiddleWare
app.use(cors());

const Users = [
    { id: '1', name: 'Amanullah', email: 'mcaman@gmail.com', paragraph: 'Tor moto manusher sathe amon e howa uchit,Tui ekta madercode,Bainchod, and amon ja kichu ace sob tui.' },
    { id: '2', name: 'Prity', email: 'inocentgirl@gmail.com' },
    { id: '3', name: 'Sultana', email: 'goodgirl@gmail.com' },
    { id: '4', name: 'layla', email: 'knovulnaitar@gmail.com' },
    { id: '5', name: 'Aman', email: 'madercodtui@gmail.com' }
]



app.get('/', (req, res) => {
    res.send('Welcome to my fast Server')
})

app.get('/users', (req, res) => {
    res.send(Users)
})

app.listen(port, (req, res) => {
    console.log(`My First server is running on port ${port}`)
});