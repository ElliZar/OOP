/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-trailing-spaces */
const Koa = require("koa");
const path = require("path");
const views = require("koa-views");
const Router = require("koa-router");
const serve = require("koa-static");
// const sass = require("koa-node-sass").default;
// const nodeSass = require("node-sass");
// const autoprefixer = require("autoprefixer");
bodyParser = require("koa-bodyparser");

const app = new Koa();
const router = new Router();

app.use(bodyParser());

app.use(views(path.join(__dirname, "/views"), {
  extension: "pug",
  map: {
    pug: "pug",
  },
}));

// app.use(sass({
//   src: path.join(__dirname, "static", "scss"),
//   css: path.join(__dirname, "public", "stylesheet"),
//   init: true,                          
//   gzip: true,
//   force: true,                                 
//   sourceMap: true,                             
//   maxAge: 0,                                   
//   prefix: "/css",                              
//   extname: ".scss",                            
//   browsers: ["last 2 versions", "> 2%"],       
//   sass: nodeSass,                              
//   plugins: [                                   
//     autoprefixer({overrideBrowserslist: ["last 2 versions", "> 2%"]}),
//   ],
// }));
const auth = require("./routes/auth").routes();
const profile = require("./routes/profile").routes();

app.use(serve(path.join(__dirname, "/public")));
router.use("/", auth);
router.use("/profile", profile);

app.use(router.routes());


const PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
  if (err) {
    console.log(`Something go wrong. ${err}`);
  } else {
    console.log("Server run");
  }
});
