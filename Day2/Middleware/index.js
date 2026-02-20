const express = require('express')
const users = require('./MOCK_DATA.json')

const app = express()

app.use(express.urlencoded({extended : false}))


//Rest API routes

app.get("/" , (req , res) => {
    res.end( res.creditcard + " Welcome to Home Page+")
})


app.get("/users" , (req , res) => {
    const html = users.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join("")
    res.send(`<ul>${html}</ul>`)
})

app.get("/api/users" , (req , res) => {
    res.json(users)
})

app.listen(8000 , () => {console.log("Server is running !!!")})