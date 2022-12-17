const app = require("express")();

app.get("/", (req, res) => res.json("Fuck node.js"));

app.get("/api/love", (req, res) =>
  res.json({
    howAreYou: "I Love You",
  })
);

app.listen(3000, () => console.log("Listening on port 3000"));
