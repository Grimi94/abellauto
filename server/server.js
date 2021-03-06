//Lets require/import the HTTP module
var http = require('http');


//  ---------- Queries for database


//Lets define a port we want to listen to
var PORT = 8080;

//We need a function which handles requests and send response
function handleRequest(request, response){
    connection.query(getCurrentOrders, function(err, rows, fields) {
        if (err) throw err;
     	console.log('database response');
        console.log(rows);
    	console.log(fields);
        response.end(JSON.stringify(rows));
    });
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening.
    console.log("Server listening on: http://localhost:%s", PORT);
});
