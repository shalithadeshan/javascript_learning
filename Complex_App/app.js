const express = require('express') // use express
const app = express() // set app name to app and tell use express

const router = require('./router') // use router file


app.use(express.static('public')) // access public folder
app.set('views', 'views') // 1st view need to be same 2nd one folder name that contain all the UI file
app.set('view engine', 'ejs') // set UI view file

app.use('/', router) // use rouer.js file

app.listen(3000) // port number loachost:3000