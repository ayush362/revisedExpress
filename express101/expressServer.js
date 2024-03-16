const express = require("express");
const app = express();

app.all("*", (req, res) => {
    // Express handles the basic headers (status code,mime-type)
    // express handles the ends
    res.send(`<h1>This is the home page</h1>`);
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
