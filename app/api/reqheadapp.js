
module.exports = function (req, callBack) {

var userData = {ipaddress:null, language:null, software: null};
var headers = req.headers;
var userData = {};
userData["accept-language"] = req.headers["accept-language"];
userData["accept-language"] = req.headers["accept-language"];
userData["x-forwarded-for"] = req.headers["x-forwarded-for"];

return callBack(null, userData);

};
