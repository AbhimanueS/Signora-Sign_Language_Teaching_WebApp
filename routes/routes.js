// routes.js
const express = require('express');
const User = require('../model/model');

const router = express.Router();

// POST /api/register
router.post("/register", async(req, res) => {
    try {
        const existingUser = await User.findOne({email: req.body.email});
        if(existingUser){
            return res.status(400).send('User with this email already exists. <a href="/register">Try again</a>.');
        }
        
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password 
        });
        await newUser.save();
        res.redirect('/login');
    } catch(err) {
        console.error('Error saving user data', err);
        res.status(500).send('Error saving user data');
    }
});

// POST /api/login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).send('User not found. <a href="/login">Try again</a>.');
        }
        if (user.password !== password) {
            return res.status(401).send('Invalid credentials. <a href="/login">Try again</a>.');
        }
        
        // *** THIS IS THE CHANGE ***
        // Redirect to /app instead of /
        res.redirect("/app"); 

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;