const dotenv = require('dotenv') // import dotenv library
dotenv.config()
const mongodb = require('mongodb')
    // const { listen } = require('./app')



mongodb.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
    module.exports = client.db()
    const app = require('./app') // import
    app.listen(process.env.PORT)
})