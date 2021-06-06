// let http = require("http")

// let ourApp = http.createServer(function(req, res) {
//     if (req.url == "/") {
//         res.end("Hello, and welcome to our home page.");
//     } else if (req.url == "/about") {
//         res.end("Thank you for the interest in our company.");
//     } else {
//         res.end("We cannot find page what you are looking for");
//     }

// })
// ourApp.listen(3000)

let express = require("express")
let ourApp = express()

ourApp.use(express.urlencoded({ extended: false }))

ourApp.get('/', function(req, res) {
    res.send(`
    <form action="/answer" method="POST">
    <p>What color is the sky on a clear and sunny day?</p>
    <input name="skyColor" autocomplete="off">
    <button>Submit Answer</button>
    </form>
    `)
})

ourApp.post('/answer', function(req, res) {
        // res.send("Thank you for submitting the form")
        if (req.body.skyColor.toUpperCase() == "BLUE") {
            res.send(`
        <p>Congrats, that is correct answer!</p>
        <a href="/">Back to Home Page</a>
        `)
        } else {
            res.send(`
        <p>Sorry, that is incorrect!</p>
        <a href="/">Back to Home Page</a>
        `)
        }
    }) // when submit the form

// ourApp.get('/answer', function(req, res) {
//     res.send("There is nothing to see here...!")
// }) // when click on typical navigation link
ourApp.listen(3000)