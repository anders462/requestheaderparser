'use strict'

var parse = require('user-agent-parser')
module.exports = function (req, callBack) {
var userData = {};
var uA = parse(req.headers["user-agent"]);
userData["ipaddress"] = req.headers["x-forwarded-for"];
userData["language"] = req.headers["accept-language"].split(",")[0];
userData["software"] = uA.os.name + " " + uA.os.version;


return callBack(null, userData);

};
