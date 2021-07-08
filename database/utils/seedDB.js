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
		email: "jojo@jimjim.com",
		imageURL: "https://cpb-us-w2.wpmucdn.com/portfolio.newschool.edu/dist/2/485/files/2014/08/DSC_1004-2-1a1yqd6.jpg",
		gpa: 3.1
	});

	const dummy_student2 = await Student.create({
		firstname: "Amy",
      	lastname: "Blah",
		email: "person@time.edu",
		imageURL: "https://images2.penguinrandomhouse.com/author/2240565",
		gpa: 2.9
	});

	const dummy_student3 = await Student.create({
		firstname: "Pockey",
      	lastname: "Hockey",
		email: "nothing@here.org"
	});

	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);	
}

module.exports = seedDB;
