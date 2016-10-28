var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var client = require('twilio')('AC96bb67e5748ab05f575e93eda64fff12','5a5e4d67abd89f1b644f3fb2c2beae90');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/twilio', function(req, res){
    client.sendMessage({
        to: '+14077569733',
        from: '+13212826807',
        body: 'Hello World from twilio'
    }, function(err, data){
        if(err)
            console.log(err);
        console.log(data);
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

app.listen(port);
console.log('Server running on port: ' + port);