const express = require('express');
const router = express.Router();
const Waitlist = require('../models/Waitlist');

router.post('/', async (req, res) => {
    try {
        const { email, honeypot } = req.body;

        // Anti-spam honeypot check
        if (honeypot) {
            return res.status(400).json({ message: 'Spam detected' });
        }

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        const existingEmail = await Waitlist.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: 'You are already on the waitlist!' });
        }

        const newUser = await Waitlist.create({
            email,
            source: req.body.source || 'landing-page'
        });

        res.status(201).json({
            status: 'success',
            message: 'Successfully joined the waitlist!',
            data: newUser
        });
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ message: err.message });
        }
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
