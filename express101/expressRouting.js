const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log(req);
    res.send("This is the GET method");
});

app.post("/", (req, res) => {
    res.send("This is the POST method");
});

app.put("/", (req, res) => {});
app.delete("/", (req, res) => {});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
