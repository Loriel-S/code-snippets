require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.calls
  .create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to: process.env.PRIVATE_NUMBER,
    from: process.env.TWILIO_NUMBER,
  })
  .then((call) => console.log(call.sid));
