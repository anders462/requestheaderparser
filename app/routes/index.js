'use strict'
var reqHeadApp = require(process.cwd() + '/app/api/reqheadapp.js');

module.exports = function(app) {

//main route to serve index.html
  app.get('/', function(req,res){
      reqHeadApp(req, function(err, data) {
        if (err){
          res.send("Error: " + err);
        } else {
          res.send(data);
        }

      })

  });

};
