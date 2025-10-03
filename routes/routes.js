const express = require('express');
const User = require('../model/model');
const path = require('path');
const bcrypt = require('bcrypt'); 

const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../homepage.html'));
});


router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../login.html'));
});


router.post("/", async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.send("User with this email already exists"); 
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword 
        });

        await newUser.save();
        res.redirect("/home.html"); 
    } catch (err) {
        console.error('Error saving user data', err);
        res.status(500).send('Error saving user data');
    }
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('User not found');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }

        res.redirect("/home.html");
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send('Internal server error');
    }
});




const alphabetData = {
    'A': {
        letter: 'A',
        imageUrl: '/videos/Avid.mp4', 
        description: 'To sign the letter A, make a fist with your thumb placed on the side of your index finger.'
    },
    'B': {
        letter: 'B',
        imageUrl: '/videos/Bvid.mp4',
        description: 'To sign the letter B, hold your hand up with your four fingers together and your thumb tucked across your palm.'
    },
    'C': {
        letter: 'C',
        imageUrl: '/videos/Cvid.mp4',
        description: 'To sign the letter C, curve your fingers and thumb to form the shape of the letter C.'
    },
    'D': {
        letter: 'D',
        imageUrl: '/videos/Dvid.mp4',
        description: 'To sign the letter D, extend your index finger straight up and touch the tips of your other three fingers to your thumb.'
    },
    'E': {
        letter: 'E',
        imageUrl: '/videos/Evid.mp4',
        description: 'To sign the letter E, bend your four fingers down to touch your palm, with your thumb tucked in closely.'
    }
    
};


router.get('/:alpha', async (req, res) => {
    const requestedLetter = req.params.alpha.toUpperCase(); 
    const letterData = alphabetData[requestedLetter];

    if (letterData) {
        res.render('Alphabet', { alphabet: letterData });
    } else {
        res.status(404).send("Sorry, we don't have information for that letter yet!");
    }
});

module.exports = router;