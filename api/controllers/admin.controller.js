module.exports.updateStatus = function(req, res){
  var status = req.params.status;

  res.status(200);
  res.json({"status": status});
};
