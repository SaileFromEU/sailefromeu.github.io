const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export",
  {
    branch: "master",
    repo: sailefromeu.github.io.git,
    user: {
      name: "SaileFromEU",
      email: "eliasskaugeeriksen@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
