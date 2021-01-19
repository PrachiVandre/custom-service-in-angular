require('dotenv').config();
const mailer = require("nodemailer");
const transport = mailer.createTransport({
    service : 'gmail',
    auth : {
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
})
let body = {
    from: 'info@tourprides.com', // Sender address
    to: 'prachivandre@gmail.com',         // List of recipients
    subject: 'Test Mail', // Subject line
    html: `<h1>Thanks for Subscribing us</h1><br/><p>Get your <b>Tour plan</b> today!</p>`
};
transport.sendMail(body,(err, result)=>{
    if (err) {
      console.log(err);
      return false;
    } 
    console.log(result);
})