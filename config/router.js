var student = require('./../controllers/student');
var degree = require('./../controllers/degree');

module.exports = function (router) {
	//routes fpr students
	router.route('/student')
		.get(student.find);

	router.route('/degree')
		.get(degree.find)
		.post(degree.insert)
		.put(degree.update);
	router.route('/degree/:id')
		.get(degree.findOne)
		.delete(degree.remove);
	return router;
};
