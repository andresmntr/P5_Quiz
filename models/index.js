const Sequelize = require("sequelize");

const sequelize = new Sequelize("sqlite:quizzes.sqlite", {logging: false});

const fs = require("fs");
let quizzes = [];

sequelize.define('quiz', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	question: {
		type: Sequelize.STRING,
		unique: {msg: "Ya existe esta pregunta"},
		validate: {notEmpty: {msg: "La pregunta no puede estar vacia"}}
	},
	answer: {
		type: Sequelize.STRING,
		calidate: {notEmpty: {msg: "La pregunta no puede estar vacia"}}
	}
});

sequelize.sync()
.then(() => sequelize.models.quiz.count())
.then(count => {
	if(!count) {
		return sequelize.models.quiz.bulkCreate([
			{id: 0 , question: "Capital de Italia", answer: "Roma" },
			{id: 1 , question: "Capital de Francia", answer: "París"},
            {id: 2 , question: "Capital de España", answer: "Madrid"},
            {id: 3 , question: "Capital de Portugal", answer: "Lisboa"}
		]);
	}
})
.catch(error => {
	console.log(error);
});



module.exports = sequelize;