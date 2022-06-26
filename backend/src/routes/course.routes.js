const koaRouter = require("koa-router");
const router = new koaRouter({ prefix: "/course"});
const { addCourse, getCourses, updateCourse, deleteCourse } = require("../controller/course.controller");


router.post("/add", addCourse);
router.delete("/:courseId", deleteCourse);
router.get("/", getCourses);
router.put("/:id", updateCourse);


module.exports = router;