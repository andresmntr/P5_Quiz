
const Sequelize = require("sequelize");
const {models} = require("../models/index.js");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'P5_QUIZ' });
});

router.get('/credits', (req, res, next) => {
	res.render('credits', {title: "P5_QUIZ", name: "Andres Montero"});
});

router.get('/quizzes', (requ, res, next) => {
	models.quiz.findAll().then( (quizzes) => {
		res.render('quizzes', {quizzes});
	})
	.catch(error => {
	});
});

module.exports = router;
