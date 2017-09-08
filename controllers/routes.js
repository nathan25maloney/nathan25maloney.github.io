
 
module.exports = function(app, passport) {

    app.get('/', function(req,res){
        res.render('index.handlebars');
    });

    app.get('/about', function(req, res) {
        res.render('about.handlebars');
    });

    app.get('/portfolio', function(req, res) {
        res.render('portfolio.handlebars');
    });

    app.get('/contact', function(req, res) {
        res.render('contact.handlebars');
    });
 
 
 





 
}