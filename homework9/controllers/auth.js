module.exports = {
  async welcome(ctx, next) {
    await ctx.render("welcome");
  },
  async getSignIn(ctx, next) {
    await ctx.render("sign", {
      choice: "Sign Up",
      choiceLink: "register",
      discription: "Do not have an account?",
      title: "Sign In"});
  },
  async postSignIn(ctx, next) {
    const {email, password} = ctx.request.body;
    if (email === "" && password === "") {
      ctx.body = "Enter email and password";
    } else {
      ctx.redirect("/profile");
    }
  },
  async getSignUp(ctx, next) {
    await ctx.render("signUp", {
      choice: "Sign In",
      choiceLink: "login",
      discription: "Already have an account?",
      title: "Sign Up",
    });
  },
  async postSignUp(ctx, next) {
    const {firstName, lastName, username, email} = ctx.request.body;
    // eslint-disable-next-line max-len
    if (firstName !== "" && lastName !== "" && username !== "" && email !== "") {
      ctx.redirect("complete");
    } else {
      ctx.body = "please fill in all fields ";
    }
  },
  async getComplete(ctx, next) {
    await ctx.render("complete", {
      choice: "Log In",
      choiceLink: "login",
      discription: "Already have an account?",
      title: "Registration",
    });
  },
  async postComplete(ctx, next) {
    // eslint-disable-next-line max-len
    const {createPassword, confirmPassword, checkbox1, checkbox2} = ctx.request.body;
    console.log(createPassword, confirmPassword, checkbox1, checkbox2);
    // await ctx.redirect("/login");
  },
  async email(ctx, next) {
    await ctx.render("email", {
      choice: "Sign In",
      choiceLink: "login",
      discription: "Back to",
      title: "E-mail",
    });
  },
  async postEmail(ctx, next) {
    const {email} = ctx.request.body;
    if (email.length === 0) {
      ctx.body = "please fill in email field";
    } else {
      ctx.redirect("ready");
    }
  },
  async ready(ctx, next) {
    await ctx.render("almostReady", {
      choice: "Log In",
      choiceLink: "login",
      discription: "Already have an account?",
      title: "Ready",
    });
  },
};

