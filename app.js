const express = require('express');
var app = express();
const useragent = require('useragent');
var port = process.env.PORT || 8080;
console.log(`Current directory: ${process.cwd()}`);

app.get('/', function (req, res) {

 var json =  {  
       "ip": req.headers['x-forwarded-for'] || req.connection.remoteAddress,
       "locale": req.headers["accept-language"].slice(0,5),
    "os":useragent.parse(req.headers['user-agent']).os.toString()
     
 }
       
   res.send(JSON.stringify(json));
});



app.listen(port, function () {
    console.log('Our app is running on http://localhost:' + port);
});

