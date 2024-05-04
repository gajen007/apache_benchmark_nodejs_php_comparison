var express = require('express');
var app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public'));
var cors = require('cors');
app.use(cors({origin:"*",methods:['POST','GET']}));
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", 'Content-Type, Authorization, Content-Length, X-Requested-With');
	res.header("Access-Control-Allow-Methods", "PUT, POST, GET, OPTIONS, DELETE");
	next();
});

var server = app.listen(8081, function (err) {
	if(err){
		console.log(err);
	}
	else{
		console.log("Server listening at 8081");
	}
});

app.get('/', function (req, res) {
	res.json({"message":"This is root","result":true});
});

app.get('/test', function (req, res) {
	let num1=req.query.num1;
	let num2=req.query.num2;
	res.json(parseInt(num1)+parseInt(num2));
});
