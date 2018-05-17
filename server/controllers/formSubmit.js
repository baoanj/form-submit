async function post (ctx, next) {
  ctx.body = ctx.request.body.value;
}

module.exports = {
    post
};
