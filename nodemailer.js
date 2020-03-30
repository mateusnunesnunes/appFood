"use strict";
const nodemailer = require("nodemailer");

const CronJob = require('cron').CronJob


// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

 

  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'mateusnunesnunes487@gmail.com', // generated ethereal user
      pass: 'aeuue040101' // generated ethereal password
    }
  });
  let htmlSource = ''
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '""', // sender address
    to: "pedro1silva1vargas@gmail.com", // list of receivers , pedro1silva1vargas@gmail.com ,icaangame@gmail.com
    subject: 'ASNDASDJNS', // Subject line
    text: 'DFHGFSDF', // plain text body
    html: '<a  href="https://akk.li/pics/anne.jpg?fbclid=IwAR1pei9K_JRUDjqdODPfC-sWbDtnmQP59_VZNePGbUcFspsc8RzQTZjtOAw">Clica aí</a>' // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);