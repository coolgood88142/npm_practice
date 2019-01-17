var http = require('http');
 
// 用于?求的??
var options = {
   host: 'localhost',
   port: '8080',
   path: '/index.html'  
};
 
// ?理??的回?函?
var callback = function(response){
   // 不?更新?据
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // ?据接收完成
      console.log(body);
   });
}
// 向服?端?送?求
var req = http.request(options, callback);
req.end();