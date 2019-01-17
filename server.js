var http = require('http');
var fs = require('fs');
var url = require('url');
 
 
// ?�تA?��
http.createServer( function (request, response) {  
   // �ѪR?�D�A�]�A���W
   var pathname = url.parse(request.url).pathname;
   
   // ?�X?�D�����W
   console.log("Request for " + pathname + " received.");
   
   // ?���t?��?��?�D�����?�e
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP ???: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{             
         // HTTP ???: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});    
         
         // ??���?�e
         response.write(data.toString());        
      }
      //  ?�e???�u
      response.end();
   });   
}).listen(8080);
 
// ����x??�X�H�U�H��
console.log('Server running at http://127.0.0.1:8080/');