var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var port = process.env.PORT || 3000;
var client = require('twilio')('PNc71fa028f60781964d4a3a109ae3a35f','5a5e4d67abd89f1b644f3fb2c2beae90');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('web'));


app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/web/app.html'));
});

app.listen(port, function (req, res) {
	console.log('Example app listening on port ' + port + '!');

	// res.writeHead(200, { 
	// 		'Content-Type': 'text/plain',
	// 		'Access-Control-Allow-Origin': '*'
	// });
	// req.on('data', function (chunk) {

	// 	function parseParams(str) {
	// 		return str.split('&').reduce(function (params, param) {
	// 				var paramSplit = param.split('=').map(function (value) {
	// 						return decodeURIComponent(value.replace('+', ' '));
	// 				});
	// 				params[paramSplit[0]] = paramSplit[1];
	// 				return params;
	// 		}, {});
	// 	};
	// 	var dataString = formData;
	// 	// chunk.toString('utf8'),
	// 	// data = parseParams(dataString);

	// 		client.messages.create({

	// 			to: '+1' + dataString.phoneNumber,
	// 			from: '+13212826807',
	// 			body: 'Hey ' + dataString.firstName + ' this works!'

	// 		}, function(err, responseData) {
			
	// 			if (!err) {
	// 				console.log(responseData.from);
	// 				console.log(responseData.body);
	// 			}
	// 	});
	// });
	// res.end('{"msg" :"ok"}');

});

app.post('/message', function (req, res) {

	var twilio = require('twilio');

	var formData = res.req.body;

	console.log(formData);
	console.log(formData.phoneNumber);

	client.sendMessage({

		    to: '+1' + formData.phoneNumber,
		    from: '+13212826807',
		    body: 'Hey ' + formData.firstName + ' this works!'


		}, function(err, responseData) {
		    
		    if (!err) {
		        console.log(responseData.from);
		        console.log(responseData.body);

		    }
		});


});

app.post('/message', function (req, res) {
	console.log(req.body);
	var msgFrom = req.body.From;
	var msgBody = req.body.Body;

	res.send(`
		<Response>
			<Message>
				'hey ${msgFrom}'
			</Message>
		</Response>
	`);
});
