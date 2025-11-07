const express = require('express');
const path = require('path');
const connectDB = require('./database/database');
const userRoutes = require('./routes/routes');
const { urlencoded } = require('body-parser');

const app = express();
const PORT = 3000;

app.use(urlencoded({ extended: true }));
app.use(express.json()); 

app.use(express.static(__dirname)); 

app.use('/api', userRoutes);


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'homepage.html'));
});

app.get("/homepage", (req, res) => { 
    res.sendFile(path.join(__dirname, 'homepage.html'));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, 'registration.html')); 
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});


app.use(express.static(path.join(__dirname, 'myapp', 'build')));

connectDB();

app.get(/^\/app/, (req, res) => {
    res.sendFile(path.join(__dirname, 'myapp', 'build', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});