const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('9UI8R4');
const msg = {
  to: 'rapperhoneysgh@gmail.com',
  from: 'sharuksaikat56@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>Hello sir,<br> Your complaint is registered with us. We are working on it. <br><br>Best Regards <br>TEAM</strong>',
};
sgMail.send(msg);