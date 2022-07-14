client.messages
  .create({
    body: "Hi there!",
    from: process.env.TWILIO_NUMBER,
    to: process.env.PRIVATE_NUMBER,
    statusCallback: 'http://yourdomain.com/callback'
  })
  .then((message) => console.log(message.sid));
