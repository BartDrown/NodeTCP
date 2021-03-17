
/*
In the node.js intro tutorial (http://nodejs.org/), they show a basic tcp 
server, but for some reason omit a client connecting to it.  I added an 
example at the bottom.
Save the following server in example.js:
*/

const net = require('net');

const server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');

	

	server.on('error', (e)=>{
        	console.log("Error received: ", e);
	})

	server.on('close', (data)=>{                           		console.log("Connection closed: ", data)        })                                                                                                              server.on('data', (data)=>{
	        console.log("Data received: ", data);
	})	
	socket.pipe(socket);


});

server.listen(1338, '127.0.0.1');

