
var phrases = require('./ru.json');

function User(name) {
    this.name = name;
}

User.prototype.sayHi = function() {
    console.log(phrases.Hello + ' ' + this.name);
};

exports.user = User;

console.log('user.js is required');