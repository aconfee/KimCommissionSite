'use strict';
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // secure:true for port 465, secure:false for port 587
    auth: {
        user: "adamestela@gmail.com",
        pass: ""
    }
});

module.exports.sendInquiry = function(req, res) {

  const { senderDetails, commissionDetails } = req.body;

  const first = senderDetails.first;
  const last = senderDetails.last;
  const email = senderDetails.email;
  const captcha = senderDetails.captcha;

  const detail = commissionDetails.detailTitle;
  const frame = commissionDetails.frameTitle;
  const numberOfCharacters = commissionDetails.numberOfCharacters;
  const background = commissionDetails.backgroundTitle;
  const asIs = false; // TODO

  const characterEstimate = commissionDetails.character;
  const backgroundEstimate = commissionDetails.background;
  const asIsDiscountMultiplier = 1.0; // TODO
  const total = asIs ? commissionDetails.total * asIsDiscountMultiplier : commissionDetails.total;

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
    Discount: ${((1.0 - asIsDiscountMultiplier) * 100).toFixed(0)}%
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
    <p><b>Discount</b> ${((1.0 - asIsDiscountMultiplier) * 100).toFixed(0)}%</p>
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
        console.log("Something went wrong when trying to send email.");
        res.status(500);
        res.json({ messageId: info.messageId, response: info.response });
        return;
      }

      res.status(200);
      res.json({ messageId: info.messageId, response: info.response });
  });
};

module.exports.sendMessage = function(req, res) {
  res.satus(200);
  res.json({ message: "Not Implemented" });
};
