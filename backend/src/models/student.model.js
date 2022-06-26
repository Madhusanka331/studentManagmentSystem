const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentName: {type: String, required: true },
    age: {type: Number, required: true },
    nic: {type: Number, required: true },
    courseId: {type: mongoose.Schema.Types.ObjectId, required: false, ref: "Courses"},
});


const student = mongoose.model("Students", studentSchema);

module.exports = student;