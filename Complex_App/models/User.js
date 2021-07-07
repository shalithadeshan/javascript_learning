const validator = require('validator')

let User = function(data) {
    // this.homePlannet = "earth" // add property to User object
    this.data1 = data
    this.errors = []

}

User.prototype.cleanUp = function() {
    // if user submit other than the simple text this will going to prevent that
    if (typeof(this.data1.username) != "string") {
        this.data1.username = ""
    }
    if (typeof(this.data1.email) != "string") {
        this.data1.email = ""
    }
    if (typeof(this.data1.password) != "string") {
        this.data1.password = ""
    }

    // get rid of any bogus properties
    this.data1 = {
        username: this.data1.username.trim().toLowerCase(), // if there was spaces in the begining of the username
        email: this.data1.email.trim().toLowerCase(),
        password: this.data1.password
    }
}

User.prototype.validate = function() {
    if (this.data1.username == "") {
        this.errors.push("You must provide a Username")
    }
    if (this.data1.username != "" && !validator.isAlphanumeric(this.data1.username)) {
        this.errors.push("Username can only contain letters and numbers")
    }
    if (!validator.isEmail(this.data1.email)) {
        this.errors.push("You must provide a Email")
    }
    if (this.data1.password == "") {
        this.errors.push("You must provide a Password")
    }
    if (this.data1.password.length > 0 && this.data1.password.length < 12) {
        this.errors.push("Password should be 12 charactres")
    }
    if (this.data1.password.length > 100) {
        this.errors.push("Password cannot exceed 100 characters")
    }
    if (this.data1.username.length > 0 && this.data1.password.length < 3) {
        this.errors.push("Username should be 3 characters")
    }
    if (this.data1.username.length > 30) {
        this.errors.push("Password cannot exceed 30 characters")
    }
}

User.prototype.register = function() {
        // validate user data
        this.cleanUp()
        this.validate()
    } // implement function to User

module.exports = User