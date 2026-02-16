const http = require("http")
const url = require("url")

const server = http.createServer((req , res) => {

    const myurl = url.parse(req.url , true)
    
    console.log("--------------------------" , myurl)
    switch(myurl.pathname) {
        case "/":
            res.end("Welcome to the homepage")
            break;

            case "/about":
                const username = myurl.query.username
                res.end(`Welcome to about page , ${username}`)
                break;
            default:
                res.end("404 Not Found")
                break;
    }
});

server.listen(8000, () => {
    console.log("Server is running on port 8000")
})