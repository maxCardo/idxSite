const express = require("express");
const path = require("path");
const exec = require("./execShellCommand");
const preRenderDir = path.resolve(__dirname, "../pre-renderer");
const clientDir = path.resolve(__dirname, "../client");

console.log("react app resources location: ", path.resolve(clientDir, "build"));
console.log(
  "react app location: ",
  path.resolve(clientDir, "build", "index.html")
);
console.log("pre render dir: ", path.resolve(preRenderDir, "public"));

async function Setup() {
  if ((process.env.NODE_ENV = !"production")) return;
  console.debug(
    await exec(`npm install --cwd ${preRenderDir} --prefix ${preRenderDir}`)
  );
  console.debug(
    await exec(`npm install --cwd ${clientDir} --prefix ${clientDir}`)
  );
  console.debug(
    await exec(`npm run build --cwd ${preRenderDir} --prefix ${preRenderDir}`)
  );
  console.debug(
    await exec(`npm run build --cwd ${clientDir} --prefix ${clientDir}`)
  );
}

const setupTimeout = setTimeout(() => {
  process.exit(1);
}, 1000000);

Setup().then(() => {
  clearTimeout(setupTimeout);
  const app = express();

  //serve static assets in production
  if (process.env.NODE_ENV === "production") {
    app.get("/test", (req, res) => {
      res.send("test");
    });
    app.use(express.static(path.resolve(clientDir, "build")));

    app.use(
      "/pre-rendered",
      express.static(path.resolve(preRenderDir, "public"))
    );

    app.get("*", (req, res) => {
      res.sendFile(path.resolve(clientDir, "build", "index.html"));
    });
  }

  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`app is up on port ${port}`));
});
