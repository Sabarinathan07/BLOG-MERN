const express = require('express');
const router = express.Router();


// @route GET api/posts
// @desc test route
// @access Public
router.get('/', (req, res) => res.send("Post route"));

module.exports = router