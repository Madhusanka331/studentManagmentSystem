const Student = require("../models/student.model");
const Course = require("../models/course.model");

const addStudent = async (ctx) => {
  try {
    const { studentName, age, nic, courseId } = ctx.request.body;
    const student = await Student.create({
      studentName,
      age,
      nic,
      courseId,
    });

    await Course.findByIdAndUpdate(courseId, {
      $push: { students: student._id },
    });
    return (ctx.body = student);
  } catch (error) {
    return (ctx.body = { message: error.message });
  }
};

const getStudents = async (ctx) => {
  try {
    const students = await Student.find({}).populate({
      path: "courseId",
      select: "courseName courseFee",
    });
    return (ctx.body = students);
  } catch (error) {
    return (ctx.body = { message: error.message });
  }
};


const updateStudent = async (ctx) => {
    try{
        const studentId = ctx.params.studentId;
        const{studentName, age, nic, courseId} = ctx.request.body;
        const student = await Student.findByIdAndUpdate(studentId, {
            studentName,
            age,
            nic,
            courseId,
        });
        await Course.findByIdAndUpdate(student.courseId, {
            $pull: {students: studentId},
        });
        await Course.findByIdAndUpdate(courseId, {
            $push: {students: studentId}
        });


        return (ctx.body = student);

    }catch(error){
        return(ctx.body = {message: message.error});
    }
};

const deleteStudent = async (ctx) => {
  try {
    const studentId = ctx.params.studentId;
    const student = await Student.findById(studentId);
    await Course.findByIdAndUpdate(student.courseId, {
      $pull: { students: studentId },
    });
    await Student.findByIdAndDelete(studentId);
    return (ctx.body = student);
  } catch (error) {
    return (ctx.body = { message: error.message });
  }
};

module.exports = {
  addStudent,
  getStudents,
  deleteStudent,
  updateStudent,
};
