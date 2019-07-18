module.exports = {
  async profile(ctx, next) {
    await ctx.render("userProfile");
  },
  async chat(ctx, next) {
    await ctx.render("chat");
  },
};
