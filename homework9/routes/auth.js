const Router = require("koa-router");
const control = require("../controllers/auth");

const router = new Router;

router
    .get("/", control.welcome)

    .get("login", control.getSignIn)

    .post("login", control.postSignIn)

    .get("register", control.getSignUp)

    .post("register", control.postSignUp)

    .get("complete", control.getComplete)

    .post("complete", control.postComplete)

    .get("email", control.email)

    .post("email", control.postEmail)

    .get("ready", control.ready);

module.exports = router;
