const mongodb = require('mongodb')
    // const { listen } = require('./app')

const connectoinString = 'mongodb+srv://shalitha:966018@cluster0.xchmn.mongodb.net/ComplexApp?retryWrites=true&w=majority'

mongodb.connect(connectoinString, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
    module.exports = client.db()
    const app = require('./app') // import
    app.listen(3000)
})