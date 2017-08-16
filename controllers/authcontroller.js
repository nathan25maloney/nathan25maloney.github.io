var db = require('../models')

var exports = module.exports = {}


exports.publicIndex = function(req, res) {
    res.render('index');

}




//these methods will be called in the future when I add the ability to log in and change content on the 
//website from the hosted site


exports.signin = function(req, res) {
 
    res.render('signin');
 
}





exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/signin');
 
    });
    
 


}