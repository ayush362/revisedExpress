const http = require("http");

// fs = file system module fs is built into node
// fs gives node access to this computer's file system
const fs = require("fs");

// The http module has a createServer method
// takes 1 arg:
// 1. callback,callback , has 2 args: req,res

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req);
    //  res = Our way of responding to the requester
    // http message
    //1. Start line - Check
    //2. Header
    //3. Body
    /*    WriteHead takes 2 args:
    1.status code
    2.object for the mime type*/
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        // res.write("");
        const homePageHTML = fs.readFileSync("node.html");
        res.write(homePageHTML);
        res.end();
    } else if (req.url === "/node.png") {
        res.writeHead(200, { "content-type": "image/png" });
        // res.write("");
        const image = fs.readFileSync("node.png");
        res.write(image);
        res.end();
    } else if (req.url === "/styles.css") {
        res.writeHead(200, { "content-type": "text/css" });
        // res.write("");
        const styles = fs.readFileSync("styles.css");
        res.write(styles);
        res.end();
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.write("<h4>Sorry this is not the page you were looking for</h4>");
        res.end();
    }
});

// createServer returns an object with a listen method
// listen takes 1 arg:
// 1. Port to listen for http traffic on
server.listen(3000);
