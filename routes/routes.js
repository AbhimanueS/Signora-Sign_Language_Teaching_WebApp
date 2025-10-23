const express = require('express');
const User = require('../model/model');
const bcrypt = require('bcryptjs'); // <-- 1. Import bcrypt

const router = express.Router();

// POST /api/register
router.post("/register", async(req, res) => {
    try {
        const existingUser = await User.findOne({email: req.body.email});
        if(existingUser){
            return res.status(400).send('User with this email already exists. <a href="/register">Try again</a>.');
        }
        
        // --- 2. HASH THE PASSWORD ---
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        // --- End of hashing ---
        
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword // <-- 3. Save the HASHED password
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

        // --- 4. COMPARE THE HASHED PASSWORD ---
        // Use bcrypt.compare to check the plain-text password from the form
        // against the hashed password in the database.
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            // Passwords don't match
            return res.status(401).send('Invalid credentials. <a href="/login">Try again</a>.');
        }
        // --- End of comparison ---
        
        // Redirect to /app (This was your original, correct redirect)
        res.redirect("/app"); 

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;

