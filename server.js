var http = require('http');
var fs = require('fs');
var url = require('url');
 
 
// ?建服?器
http.createServer( function (request, response) {  
   // 解析?求，包括文件名
   var pathname = url.parse(request.url).pathname;
   
   // ?出?求的文件名
   console.log("Request for " + pathname + " received.");
   
   // ?文件系?中?取?求的文件?容
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
         
         // ??文件?容
         response.write(data.toString());        
      }
      //  ?送???据
      response.end();
   });   
}).listen(8080);
 
// 控制台??出以下信息
console.log('Server running at http://127.0.0.1:8080/');