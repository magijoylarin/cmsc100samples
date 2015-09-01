// controllers/student.js

/*
exports.find = function(req, res) {	
	res.send("Hello World");
*/

var db = require(__dirname + './../lib/mysql');

exports.find = function(req, res){
	db.query("SELECT * FROM student", function(err, rows){
		if (err) return next(err);
		res.send(rows);
	});
};