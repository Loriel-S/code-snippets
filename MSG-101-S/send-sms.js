require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Hi there!",
    from: process.env.TWILIO_NUMBER,
    to: process.env.PRIVATE_NUMBER,
  })
  .then((message) => console.log(message.sid));
