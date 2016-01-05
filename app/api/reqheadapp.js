
module.exports = function (req, callBack) {

var userData = {ipaddress:null, language:null, software: null};

userData = req.headers;

 return callBack(null, JSON.stringify(userData));

};
