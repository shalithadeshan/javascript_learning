let http = require("http")

let ourApp = http.createServer(function(req, res) {
    if (req.url == "/") {
        res.end("Hello, and welcome to our home page.");
    } else if (req.url == "/about") {
        res.end("Thank you for the interest in our company.");
    } else {
        res.end("We cannot find page what you are looking for");
    }

})
ourApp.listen(3000)