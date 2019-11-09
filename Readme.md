# Google Action for Grievance Redressal
This Action on Google project is about Voice based Grievance Redressal. Ms. Dyna, grievance assistant asks the user to register the complaint along with the mobile number.

## Setup Instructions
### Prerequisites
  1. Node.js and NPM
  2. Install [Firebase CLI](https://developers.google.com/actions/dialogflow/deploy-fulfillment)
      * We recommend using version 6.5.0, `npm install -g firebase tools@6.5.0`
      * Run `firebase login` with your google account

## Configurations
#### Action Console
  1. From the [Actions on Google Console](https://developers.google.com/actions/), **New project** > **Create project** > under **More options** > **Conversational**
  2. From the top menu under **Develop** > **Actions** (left nav) > **Add your first action** > **Custon Intent** > **BUILD** (this will bring you to the Dialogflow console) > Select language and time zone > **CREATE**.
  3. In the Dialogflow console, **go to Settings** ⚙ > **Export and Import** > Restore from zip using the **GrievanceRedressal.zip** in this sample's directory. > Type 'RESTORE' > **Restore**
  
#### Firebase Deployment
1. To get the base files for this project, run the following command to clone the GitHub repository 
`git clone https://github.com/MauryaSrishti/grievance-redressal-syst-50e4d.git`
2. On your local machine, in the **functions** directory, run `npm install`
3. Run `firebase deploy --project {PROJECT_ID}` to deploy the function
4. To find your *Project ID*: In [Dialogflow console](https://console.dialogflow.com/api-client/#/login)  under **Settings** ⚙ > **General** tab > **Project ID**.

#### Retrieve the deployment URL
1. Go to [Firebase Console](https://firebase.google.com/) > Select the *action project* from the list > Navigate to **Develop** > **Functions**
2. Under the **Dashboard** tab, you should see an entry for "dialogflowFirebaseFulfillment" with a URL under **Trigger**. Copy this URL.

#### Set up URL in Dialogflow Console
1. Return to the Dialogflow Console> select **Fulfillment** > Enable **Webhook** > Paste the URL you copied from the Firebase dashboard if it doesn't already appear.  > **SAVE**.
2. From the left navigation menu, click **Integrations** > **Integration Settings** under Google Assistant > Enable **Auto-preview changes** > **Test** to open the Actions on Google simulator then say or type **Talk to my test app**.

#### Running Sample
* You can test your Action on any Google Assistant-enabled device on which the Assistant is signed into the same account used to create this project. Just say or type, “OK Google, talk to my test app”.

## References & Issues
1. Actions on Google [Documentation](https://developers.google.com/actions/overview)
2. Actions on Google [Codelabs](https://codelabs.developers.google.com/)

## License
See [LICENSE](https://github.com/actions-on-google/dialogflow-ssml-nodejs/blob/master/LICENSE) here.

## Terms
Your use of this sample is subject to, and by using or downloading the sample files you agree to comply with, the [Google APIs Terms of Service].(https://developers.google.com/terms/)
