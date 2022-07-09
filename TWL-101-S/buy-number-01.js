require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// find a local phone number form our areaCode
client
  .availablePhoneNumbers('US')
  .local.list({
    areaCode: '510',
    limit: 1 // we only need one number
  })
  .then(data => {
    // let's take the 1st available number...
    const phoneNumber = data[0].phoneNumber;
    console.log("Buying number:", phoneNumber)
    // ...and buy it
    client.incomingPhoneNumbers
      .create({phoneNumber})
      .then(purchasedNumber => {
        console.log("SID:", purchasedNumber.sid)
      })
      .catch(err => console.error(err));
  })
  .catch(err => console.error(err));