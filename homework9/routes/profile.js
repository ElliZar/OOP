const Router = require("koa-router");
const control = require("../controllers/profile");

const router = new Router;
router
    .get("/", control.profile)

    .get("/chat", control.chat);

module.exports = router;
