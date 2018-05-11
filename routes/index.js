
const Sequelize = require("sequelize");
const {models} = require("../models/index.js");
const quizCtrl = require('../controllers/quiz');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'P5_QUIZ' });
});

router.get('/credits', (req, res, next) => {
	res.render('credits', {title: "P5_QUIZ", name: "Andres Montero"});
});

router.get('/quizzes', (req, res, next) => {
	  quizCtrl.index(req,res,next);
});

module.exports = router;
