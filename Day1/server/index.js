const http = require("http")

const server = http.createServer((req , res) => {
    console.log(req.rawHeaders)
    res.end("Hello World from the server")
});

server.listen(8000, () => {
    console.log("Server is running on port 8000")
})