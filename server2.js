var net = require('net');
var server = net.createServer(function(c) { //'connection' listener
  console.log('Client connected at: ', new Date);
  c.on('end', function() {
    console.log('Client disconnected at: ', new Date);
  });
	
  c.write('Server respone to client\r\n');
  c.pipe(c);
});
server.listen(8124, function() { //'listening' listener
  console.log('server listening on port: ', 8124);
});
