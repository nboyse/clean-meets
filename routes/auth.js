var express = require('express');
var router = express.Router();
var HomeController = require('../controllers/home');
var UserController = require('../controllers/user');

router.get('/', HomeController.Index);
router.post('/', UserController.Authenticate);
router.get('/session/destroy', UserController.Logout);

module.exports = router;
