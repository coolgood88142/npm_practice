var http = require('http');
 
// �Τ_?�D��??
var options = {
   host: 'localhost',
   port: '8080',
   path: '/index.html'  
};
 
// ?�z??���^?��?
var callback = function(response){
   // ��?��s?�u
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // ?�u��������
      console.log(body);
   });
}
// �V�A?��?�e?�D
var req = http.request(options, callback);
req.end();