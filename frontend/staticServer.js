const StaticServer = require("static-server");

const port = 1337;

new StaticServer({
  rootPath: "./build",
  port,
}).start(() => {
  console.log("Static server listening to", port);
});
