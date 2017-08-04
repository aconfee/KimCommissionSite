module.exports.updateStatus = function(req, res){
  var status = req.params.status;

  res.status(200);
  res.json({"status": status});
}

module.exports.sendMessage = function(req, res) {

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
  const asIsDiscount = 1; // TODO
  const total = asIs ? commissionDetails.total * asIsDiscount : commissionDetails.total;

  const message = `NEW COMMISSION INQUERY!!
  Sender:
  ${first} ${last}
  ${email}

  Commission:
  Detail: ${detail}
  Frame: ${frame}
  Number of Characters: ${numberOfCharacters}
  Background: ${background}
  As-is: ${asIs}

  Financials:
  Character: ${characterEstimate}
  Background: ${backgroundEstimate}
  Discount: ${asIsDiscount * 100}% of original estimate
  Total: ${total}`;

  res.status(200);
  res.json({ message });
}
