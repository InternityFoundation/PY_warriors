// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
'use strict';

// Import the Dialogflow module and response creation dependencies from the 
// Actions on Google client library.
const {
    dialogflow,
    Permission,
    Suggestions,
  } = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

// Handle the Dialogflow intent named 'Default Welcome Intent'.
app.intent('Default Welcome Intent', (conv) => {
  conv.ask(new Permission({
    context: 'Hi there, to get to know you better',
    permissions: 'NAME'
  }));
});

// Handle the Dialogflow intent named 'actions_intent_PERMISSION'. 
//If user agreed to PERMISSION prompt, then boolean value 'permissionGranted' is true.
app.intent('actions_intent_PERMISSION', (conv, params, permissionGranted) => {
  if (!permissionGranted) {
    conv.ask(`Ok, no worries. Please tell me your mobile number?`);
  } else {
    conv.data.userName = conv.user.name.display;
    conv.ask(`Thanks, ${conv.data.userName}. Now, please tell me your mobile number?`);
  }
});

// Handle the Dialogflow intent named 'Number'.
// The intent collects a parameter named 'PhoneNumber'.
app.intent('Number', (conv, {PhoneNumber}) => {
    if (conv.data.userName) {
      conv.ask(`Thank you ${conv.data.userName}. Your phone number is ${PhoneNumber} Would you like to confirm that?`);
      conv.ask(new Suggestions('Yes', 'No'));
    } else {
      conv.ask(`Your phone number is ${PhoneNumber} Would you like to confirm that?`);
      conv.ask(new Suggestions('Yes', 'No'));
    }
});

//Handle the dialogue intent named 'Grievance'
//The intent collects a parameter named 'Complaint'
app.intent('Grievance', (conv, {Complaint}) => {
  if (conv.data.userName) {
    conv.ask(`${conv.data.userName}, would you like to add some more information?`);
    conv.ask(new Suggestions('Yes', 'No'));
  } else {
    conv.ask(`Thank you for sharing your grievance with me. Do you want to share more information?`);
    conv.ask(new Suggestions('Yes', 'No'));
  }
});

app.intent('Grievance - no', (conv) => {
  if (conv.data.userName) {
    conv.close(`Thank you ${conv.data.userName} for cooperation. You will be receiving an email shortly comprising a reference number to your complaint. 
              Our team will get back to you very soon to resolve your grievance.`);
  } else {
    conv.close(`Thanks alot for cooperation. You will be receiving an email shortly comprising a reference number to your complaint. 
                Our team will get back to you very soon to resolve your grievance.`);
  }
});

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);