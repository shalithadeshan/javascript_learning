let express = require('express')

let app = express()

app.get('/', function(req, res) {
    res.send("Hello,  welcome to our app.")
})

app.listen(3000)