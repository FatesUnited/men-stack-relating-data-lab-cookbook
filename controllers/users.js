const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/community', async (req, res) => {
    try {
        const communityUsers = await User.find();
        res.render('users/index.ejs', { communityUsers });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.get('/:userId', async (req, res) => {
    try {
        const communityUser = await User.findById(req.params.userId);
        res.render('users/show.ejs', { communityUser });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

module.exports = router;