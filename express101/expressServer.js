const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.all("/", (req, res) => {
    // Express handles the basic headers (status code,mime-type)
    // express handles the ends
    // res.send(`<h1>This is the home page</h1>`);
    res.sendFile(path.join(__dirname + "/node/node.html"));
});

app.all("*", (req, res) => {
    res.send(`<h1>404: Page not found</h1>`);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
