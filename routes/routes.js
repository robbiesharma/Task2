var ngexpr = require("angular-expressions");

exports.calcFormHandler = function(req, res){
	res.render('calc-form.handlebars', {});
}//calcFormHandler

exports.ResultHandler = function(req, res){
	var number1 = parseInt(req.query.nm1);
	var number2 = parseInt(req.query.nm2);
	var operation = req.query.operator;
	var resultValue = 0;
	console.log("num1=%s num2=%s operator=%s", number1, number2, operation);
	if (operation === '+'){
		resultValue = number1 + number2;
	}else if (operation === '-'){
		resultValue = number1 - number2;
	}else if (operation === '*'){
		resultValue = number1 * number2;
	}else if (operation === 'div'){
		resultValue = number1 / number2;
	}

	var resultString = "" + resultValue;
	console.log("resultValue=%s resultString=%s", resultValue, resultString);
	res.render('result-page.handlebars', {result: resultString});
}//ResultHandler

exports.ExpResultHandler = function(req, res){
	var expr = req.body.expression;

	var resultValue = 0;
	var resultString = "";
	console.log("expression=%s", expr);
	try{
		var fn = ngexpr.compile(expr);
		resultValue = fn();
		resultString = "" + resultValue;
	}catch(err){
		resultString = "" + err;
	}
	
	console.log("resultValue=%s resultString=%s", resultValue, resultString);
	res.render('result-page.handlebars', {result: resultString});
}//ExpResultHandler
