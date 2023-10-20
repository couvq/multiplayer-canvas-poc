const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["Quentin", "Richard"] });
});

app.listen(8080, () => console.log(`server started on port 8080...`))
