const express = require('express');
const controller = require('../controllers/authController');
const verifySignUp = require('../middlewares/verifySignUp');

const router = express.Router();

router.post('/signup', [verifySignUp.checkDuplicateUsernameOrEmail], controller.register);
router.post('/signin', controller.login);

module.exports = router;
