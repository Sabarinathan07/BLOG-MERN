const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');

// @route POST api/users
// @description register
// @access Public
router.post(
	'/',
	[
		check('name', 'Name is required').not().isEmpty(),
		check('email', 'Please enter a valid email').isEmail(),
		check('password', 'Enter a password of minimum of six characters').isLength(
			{ min: 6 }
		),
	],
	 async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password } = req.body;
		try {
			//to see if user's exist
            let user = await User.findOne({ email });

            if (user) {
                res.status(400).json(({ errors: [{ msg: 'User already exists' }] }));
            }

			// get user gravatar
            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });
            // const avatar = gravatar.url(req.body.email,
            //     { s: '100', r: 'x', d: 'mm' },
            //     true)
            
            user = new User({
                name,
                email,
                avatar,
                password
            });

			//encrypt password
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();


			// return json webtoken

			res.send('User route');
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server Error");
        }
	}
);

module.exports = router;
