var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app, passport) {

    app.get('/', authController.publicIndex);

    app.get('/about', authController.publicAbout);

    app.get('/portfolio', authController.publicPortfolio);

    app.get('/contact', authController.publicContact);
 
 
 




// all routes for admin sign on to be used in the future 
    app.get('/signin', authController.signin);


    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signup'
        }
        
 
    ));


    app.get('/logout',authController.logout)


    function isLoggedIn(req, res, next) {
 
    if (req.isAuthenticated())
     
        return next();
         
    res.redirect('/signin');
 
}
 
}