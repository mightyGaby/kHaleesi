var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;
var client = require('twilio')('AC96bb67e5748ab05f575e93eda64fff12','5a5e4d67abd89f1b644f3fb2c2beae90');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('web'));
app.use(cookieParser('cookieSecret'))


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/web/app.html'));
});



app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/twilio', function(req, res){

    var data = res.req.body;

    console.log(req.cookies) 

    var options = {
        maxAge: 1000 * 60 * 15, // would expire after 15 minutes
        httpOnly: true, // The cookie only accessible by the web server
        signed: true // Indicates if the cookie should be signed
    }

    // Set cookie
    res.cookie('conversation', data, options);

    client.messages.create({

        to: '+1' + data.phoneNumber,
        from: '+13212826807',
        body: 'Hey ' + data.firstName + ' this works!'

    }, function(err, responseData) {
    
        if (!err) {
            console.log(responseData.from);
            console.log(responseData.body);
        }
    });

    res.end('{"msg" :"ok"}');

});

app.post('/message', function (req, res) {
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

app.listen(port, function() {
    console.log('Server running on port: ' + port);
});
