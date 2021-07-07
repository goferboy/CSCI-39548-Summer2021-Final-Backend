const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		description: "This is a school in NYC."
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
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
