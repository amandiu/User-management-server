const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const users = [
    { id: '1', email: 'aman@gmail.com', name: 'Aman' },
    { id: '2', email: 'akon@gmail.com', name: 'Akon' },
    { id: '3', email: 'sultana@gmail.com', name: 'Sultana' },
    { id: '4', email: 'layla@gmail.com', name: 'Layla' },
    { id: '5', email: 'prity@gmail.com', name: 'Prity' },
]


// Using middleware 
app.use(cors());
app.get('/', (req, res) => {
    res.send('Welcome to my  fast server');
})

app.get('/users', (req, res) => {
    res.send(users);
})


app.listen(port, () => {
    console.log(`This is my fist servre and its running on port:${port}`);
})