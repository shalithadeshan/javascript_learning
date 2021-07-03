const express = require('express') // use express
const router = express.Router() // access express's Router method
const userController = require('./controllers/userController')

router.get('/', userController.home) // show home page in userController
router.post('/register', userController.register)

// router.get('/about', function(req, res) {
//     res.render('home-guest') // render landing page
// })

module.exports = router // export rouer variable