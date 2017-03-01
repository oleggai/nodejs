
var user = require('./user/index');

var oleg = new user.user('Oleg');
var anna = new user.user('Anna');

oleg.sayHi();
anna.sayHi();