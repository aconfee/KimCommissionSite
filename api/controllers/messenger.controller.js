'use strict';
const nodemailer = require('nodemailer');

const smtpClientId = process.env.SMTP_CLIENT_ID;
if(!smtpClientId) {
  console.error("Please set environment variable SMTP_CLIENT_ID for email messenger.");
}

const smtpClientSecret = process.env.SMTP_CLIENT_SECRET;
if(!smtpClientSecret) {
  console.error("Please set environment variable SMTP_CLIENT_SECRET for email messenger.");
}

const smtpRefreshToken = process.env.SMTP_REFRESH_TOKEN;
if(!smtpRefreshToken) {
  console.error("Please set environment variable SMTP_REFRESH_TOKEN for email messenger.");
}

const smtpAccessToken = process.env.SMTP_ACCESS_TOKEN;
if(!smtpAccessToken) {
  console.error("Please set environment variable SMTP_ACCESS_TOKEN for email messenger.");
}

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        type: "OAuth2",
        user: "adamestela@gmail.com",
        clientId: smtpClientId,
        clientSecret: smtpClientSecret,
        refreshToken: smtpRefreshToken,
        accessToken: smtpAccessToken
    }
});

module.exports.sendInquiry = function(req, res) {

  const { senderDetails, commissionDetails } = req.body;

  const { first, last, email } = senderDetails;

  const {
    detailTitle,
    frameTitle,
    numberOfCharacters,
    backgroundTitle,
    asIs,
    character,
    background,
    discount,
    total } = commissionDetails;

  const asIsDiscount = ((1.0 - discount) * 100).toFixed(0);

  const message = `
    Sender:
    ${first} ${last}
    ${email}

    Commission:
    Detail: ${detail}
    Frame: ${frame}
    Number of Characters: ${numberOfCharacters}
    Background: ${background}
    As-is: ${asIs ? "Yes" : "No"}

    Financials:
    Character: $${characterEstimate}
    Background: $${backgroundEstimate}
    Discount: ${asIsDiscount}%
    Total: $${total}`;

  const messageHtml = `<div>
    <h1>Sender</h1>
    <p>${first} ${last}</p>
    <p>${email}</p>
    <br />
    <h1>Commission</h1>
    <p><b>Detail</b> ${detail}</p>
    <p><b>Frame</b> ${frame}</p>
    <p><b>Number of Characters</b> ${numberOfCharacters}</p>
    <p><b>Background</b> ${background}</p>
    <p><b>As-is</b> ${asIs ? "Yes" : "No"}</p>
    <br />
    <h1>Financials</h1>
    <p><b>Character</b> $${characterEstimate}</p>
    <p><b>Background</b> $${backgroundEstimate}</p>
    <p><b>Discount</b> ${asIsDiscount}%</p>
    <p><b>Total: $${total}</b></p>
  </div>`;

  let mailOptions = {
      from: '"Kimby Arting Commissions" <adamestela@gmail.com>',
      to: "adamestela@gmail.com",
      subject: "NEW COMMISSION INQUERY!!",
      text: message,
      html: messageHtml
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Something went wrong when trying to send email:");
        console.log(error);

        res.status(500);
        res.json({ error });
        return;
      }

      res.status(200);
      res.json({ messageId: info.messageId, response: info.response });
  });
};

module.exports.sendMessage = function(req, res) {

  const { first, last, email, message } = req.body.senderDetails;

  const messageText = `
    Sender:
    ${first} ${last}
    ${email}

    Message:
    ${message}`;

  const messageHtml = `<div>
    <h1>Sender</h1>
    <p>${first} ${last}</p>
    <p>${email}</p>
    <br />
    <h1>Message</h1>
    <p>${message}</p>
  </div>`;

  let mailOptions = {
      from: '"Kimby Arting Commissions" <adamestela@gmail.com>',
      to: "adamestela@gmail.com",
      subject: "NEW COMMISSION MESSAGE!!",
      text: messageText,
      html: messageHtml
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Something went wrong when trying to send email:");
        console.log(error);

        res.status(500);
        res.json({ error });
        return;
      }

      res.status(200);
      res.json({ messageId: info.messageId, response: info.response });
  });
};
