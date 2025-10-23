// server.js
const express = require('express');
const path = require('path');
const connectDB = require('./database/database');
const userRoutes = require('./routes/routes');
const { urlencoded } = require('body-parser');

const app = express();

const PORT = 3000;

// Middleware
app.use(urlencoded({ extended: true }));
app.use(express.json()); 

// --- Static File Serving (for root pages) ---
// Serve login.css, homepage.css, etc. from the root folder first.
app.use(express.static(__dirname)); 

// --- API Routes ---
// Handle API calls before any page routes
app.use('/api', userRoutes);

// --- View Routes (for non-React pages) ---
// These MUST come BEFORE the React static middleware
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'homepage.html'));
});

// Serves homepage.html (alias)
app.get("/homepage", (req, res) => { 
    res.sendFile(path.join(__dirname, 'homepage.html'));
});

// Serves registration.html
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, 'registration.html')); 
});

// Serve the login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// --- React App Static Files ---
// This serves 'static/js', 'static/css' etc. from the build folder
// It comes AFTER the view routes so it doesn't "steal" the '/' route
app.use(express.static(path.join(__dirname, 'myapp', 'build')));

// Connect to MongoDB
connectDB();

// --- React App Route (Catch-all for /app) ---
// This MUST be the last GET route.
app.get(/^\/app/, (req, res) => {
    res.sendFile(path.join(__dirname, 'myapp', 'build', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});