const koaRouter = require("koa-router");
const { addStudent, deleteStudent, getStudents, updateStudent } = require("../controller/students.controller");
const router = new koaRouter({ prefix: "/student"});



router.post("/add", addStudent);
router.get("/", getStudents);
router.put("/:studentId", updateStudent);
router.delete("/:studentId", deleteStudent);

module.exports = router;