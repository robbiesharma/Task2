var express = require('express');
var hbars = require('express-handlebars');
var bodyparser = require('body-parser');


var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


var routes = require('./routes/routes.js');

app.set('view engine', 'handlebars');
app.engine('handlebars', hbars({}));

app.get('/', routes.calcFormHandler);
app.get('/result', routes.ResultHandler);
app.post('/exp-result', routes.ExpResultHandler);



var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('HTTP server is listening on port: ' + port);
});