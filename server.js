const express = require('express');
const path = require('path');
const connectDB = require('./database/database');
const userRoutes = require('./routes/routes');
const { urlencoded } = require('body-parser');

const app = express();

const PORT = 3000;

// Middleware
app.use(urlencoded({ extended: true }));
app.use(express.static(__dirname)); // serve static files from root

// Routes
app.use('/', userRoutes);

// Connect to MongoDB
connectDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});