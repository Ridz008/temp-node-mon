//console.log('Hello friend');

const name = 'John';  
console.warn(`Don't mess with me ${name}! Don't mess with me!`);  
var http=require("http");

http.createServer(function(request,response){
	response.writeHead(200,{'Content-type':'text/plain'});
	response.end('Hello friend\n');
}).listen(8081);


console.log("server runnning at 8081");
/*
To install modules use npm install <module-name>
npm install express       installs express framework

npm ls 
 to see all installed within local directory

to install globally
npm install express -g

to uninstall 
npm uninstall express

nodeJs Timer methods
setImmediate()	setInterval()	setTimeout()

https://www.javatpoint.com/nodejs-net




*/
setInterval(function() {  
	console.log("setInterval: Hey! 1 millisecond completed!..");   
}, 1000);

setTimeout(function() {   
	console.log("setTimeout: Hey! 1000 millisecond completed!..");  
}, 1000);  


/////////////////////////////

// npm install -g node-inspector

// node-inspector

// for debugging purpose