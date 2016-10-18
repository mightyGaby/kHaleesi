var client = require('twilio')(
    'AC96bb67e5748ab05f575e93eda64fff12',
    '5a5e4d67abd89f1b644f3fb2c2beae90'
);

client.sendMessage({

    to:'+18479222290',
    from: '+13212826807',
    body: 'wasup'

}, function(err, responseData) {
    
    if (!err) {
        console.log(responseData.from);
        console.log(responseData.body);

    }
});