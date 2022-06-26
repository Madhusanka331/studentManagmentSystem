const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    courseName: {type: String, required: true },
    courseFee: {type: Number, required: true },
    students: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Students" }],
});


const Course = mongoose.model("Courses", CourseSchema);

module.exports = Course;
