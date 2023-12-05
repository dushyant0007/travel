const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(viewsController.alerts);

router.route('/home').get(authController.isLoggedIn,(async (req, res, next) => {
    res.status(200).render('home');
  }));