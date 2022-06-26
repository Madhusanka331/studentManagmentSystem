require("dotenv").config();
const koa = require("koa");
const koaRouter = require("koa-router");
const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");
const json = require("koa-bodyparser");
const { dbConnect } = require("./utils/dbConnect");
const courseRoutes = require("./routes/course.routes");
const studentRoutes = require("./routes/student.routes")


const app = new koa();
const router = new koaRouter();


app.use(cors());
app.use(bodyParser());
app.use(json());
app.use(router.routes()).use(router.allowedMethods());
const port = process.env.PORT || 3000;
app.use(courseRoutes.routes());
app.use(studentRoutes.routes());


app.listen(port, () => {
dbConnect();
console.log(`server is up and running on http://localhost:${port} `)
});
