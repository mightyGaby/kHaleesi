var http = require('http'),
	client = require('twilio')('AC96bb67e5748ab05f575e93eda64fff12','5a5e4d67abd89f1b644f3fb2c2beae90');

function parseParams(str) {
    return str.split('&').reduce(function (params, param) {
        var paramSplit = param.split('=').map(function (value) {
            return decodeURIComponent(value.replace('+', ' '));
        });
        params[paramSplit[0]] = paramSplit[1];
        return params;
    }, {});
}

http.createServer(function (req, res) {

    console.log('Request received');

    res.writeHead(200, { 
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });
    req.on('data', function (chunk) {
    	var dataString = chunk.toString('utf8'),
			data = parseParams(dataString);

        client.sendMessage({

		    to: '+1' + data.phoneNumber,
		    from: '+13212826807',
		    body: 'Hey ' + data.firstName + ' you are a TB!'

		}, function(err, responseData) {
		    
		    if (!err) {
		        console.log(responseData.from);
		        console.log(responseData.body);

		    }
		});
    });

    res.end('{"msg": "OK"}');

}).listen(8080);
console.log('Server running at http://localhost:8080/');