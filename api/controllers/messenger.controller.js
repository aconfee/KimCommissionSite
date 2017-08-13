'use strict';
const nodemailer = require('nodemailer');

const smtpPassword = process.env.SMTP_PASSWORD;
if(!smtpPassword) {
  console.error("Please set environment variable SMTP_PASSWORD for email messenger.");
} else {
  console.log('smtp password is: ' + smtpPassword);
}

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        type: "OAuth2",
        user: "adamestela@gmail.com",
        //pass: smtpPassword
        clientId: "560375925539-ur6tu6l4700n8oj2ajeut5quol373hcn.apps.googleusercontent.com",
        clientSecret: "J--Lvttm580cW7GAqBNhjI6w",
        refreshToken: "1/WtToEc1NTBCuD8860_FuYuqm3oYMnOnQchr42xZo9Idp1rFrm92gjGOK5YgoDzVm",
        accessToken: "ya29.GlumBGSpGgcTSwndGVBzxzTwlRQH4cbhIPG-AOay5-X-_tZ7_nxxC24HPJO_ijqJEMBxBjVgHw5RQW5YadbHDHwS4yudJTosasphnEofBFUle97KQxLPmJJ1UAt8"
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
  const asIs = commissionDetails.asIs;

  const characterEstimate = commissionDetails.character;
  const backgroundEstimate = commissionDetails.background;
  const asIsDiscount = ((1.0 - commissionDetails.discount) * 100).toFixed(0);
  const total = commissionDetails.total;

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
  res.satus(200);
  res.json({ message: "Not Implemented" });
};
