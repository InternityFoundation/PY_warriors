const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+917376093484',
         from: '+918860103413'
       })
      .then(call => console.log(call.sid));
