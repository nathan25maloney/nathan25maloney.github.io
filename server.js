var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var path = require("path");

var port = process.env.PORT || 3000;

var app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));



// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");






// Import routes and give the server access to them.


require('./controllers/routes.js')(app);








  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });



