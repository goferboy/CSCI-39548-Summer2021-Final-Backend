const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Avenue, New York, NY 10065",
		imageURL: "http://micefa.org/wp-content/uploads/2011/10/005-1024x768.jpg",
		description: "This is a school in NYC."
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		address: "Massachusetts Hall, Cambridge, MA 02138",
		imageURL: "http://atlantablackstar.com/wp-content/uploads/2014/05/Harvard.jpg",
		description: "This is a school in MA."
	});

	const dummy_student = await Student.create({
		firstname: "Joe",
      	lastname: "Shmo",
	});

	const dummy_student2 = await Student.create({
		firstname: "Amy",
      	lastname: "Blah",
	});

	const dummy_student3 = await Student.create({
		firstname: "Pockey",
      	lastname: "Hockey",
	});

	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
	await dummy_student3.setCampus(dummy_campus);
	
}

module.exports = seedDB;
