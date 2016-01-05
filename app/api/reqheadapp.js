
module.exports = function (req, callBack) {

var userData = {ipaddress:null, language:null, software: null};
var headers = req.headers;
var userData = {};
userData["language"] = req.headers["accept-language"];
userData["software"] = req.headers["user-agent"];
userData["ipaddress"] = req.headers["x-forwarded-for"];

return callBack(null, JSON.stringify(userData));

};
