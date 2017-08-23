module.exports.getStatus = function(req, res){
  var status = process.env.AVAILABILITY;
  if(!status) {
      res.status(404);
      res.json({"error": "Status not found."});
  }

  res.status(200);
  res.json({"status": status});
};

module.exports.updateStatus = function(req, res){
  var status = req.params.status;
  process.env['AVAILABILITY'] = status;

  res.status(200);
  res.json({"status": status});
};
