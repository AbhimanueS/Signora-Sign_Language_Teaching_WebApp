const express = require('express');
const User = require('../model/model');
const path = require('path');

const router = express.Router();

// The GET route should serve the homepage.html page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../homepage.html'));
});

// The POST route should handle the form submission
router.post("/", async(req, res) => {
    try {
        const existingUser = await User.findOne({email: req.body.email});
        if(existingUser){
            return res.json({message: "User with this email already exists"});
            //res.send('User with this email already exists')
        }
        
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        await newUser.save();
        res.json({redirectURL: '/home.html'});
    } catch(err) {
        console.error('Error saving user data', err);
        res.status(500).send('Error saving user data');
    }
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../login.html'));
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).send('User not found');
        }
        if (user.password !== password) {
            return res.status(401).send('Invalid credentials');
        }
        res.redirect("/home.html")
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send('Internal server error');
    }
});

// In routes.js

// This is our "database" of alphabet information.
// In a real app, this might come from MongoDB.
const alphabetData = {
    'A': {
        letter: 'A',
        imageUrl: '/videos/Assign.mp4', // You'll need to create an images folder
        description: 'To sign the letter A, make a fist with your thumb placed on the side of your index finger.'
    },
    'B': {
        letter: 'B',
        imageUrl: '/images/sign_B.png',
        description: 'To sign the letter B, hold your hand up with your four fingers together and your thumb tucked across your palm.'
    },
    'C': {
        letter: 'C',
        imageUrl: '/images/sign_C.png',
        description: 'To sign the letter C, curve your fingers and thumb to form the shape of the letter C.'
    },
    'D': {
        letter: 'D',
        imageUrl: '/images/sign_D.png',
        description: 'To sign the letter D, extend your index finger straight up and touch the tips of your other three fingers to your thumb.'
    },
    'E': {
        letter: 'E',
        imageUrl: '/images/sign_E.png',
        description: 'To sign the letter E, bend your four fingers down to touch your palm, with your thumb tucked in closely.'
    }
  
};


router.get('/:alpha', async (req, res) => {
    const requestedLetter = req.params.alpha.toUpperCase(); // Ensure it's uppercase
    const letterData = alphabetData[requestedLetter];

    if (letterData) {
        // If we found data for the letter, render the template
        // 1st argument: name of the .ejs file in the 'views' folder
        // 2nd argument: an object with the data to pass to the template
        res.render('Alphabet', { alphabet: letterData });
    } else {
        // If no data is found for that letter, send a 404 error
        res.status(404).send("Sorry, we don't have information for that letter yet!");
    }
});

module.exports = router;