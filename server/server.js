var http = require('http');
var fs = require('fs')
var page = fs.readFileSync('../cypress/components/local/page.html')

http.createServer(function(req, res){
    res.end(page)
}).listen(3000)