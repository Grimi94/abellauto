//Lets require/import the HTTP module
var http = require('http');
var mysql = require('mysql');
var localtunnel = require('localtunnel');

var tunnel = localtunnel(8080, function(err,tunnel){
	console.log(tunnel.url);
});

tunnel.on('close', function(err){
    console.log('error');
    console.log(err);
});

var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'root',
      password : 'olalla',
      database : 'talleres',
    }
);


//  ---------- Queries for database

var idsquery = "select id, f_prom from ODT_ORDEN where f_prom < DATE_SUB(CURDATE(), INTERVAL 7 DAY) AND estado = 'A' ";
// var anotherquery = 'select proc, sta, emp from ODT_PXO where id_odt = 26691';
var getCurrentOrders =  "select id, color, subm, proc, cve_emp, f_prom from ODT_ORDEN where f_prom < DATE_SUB(CURDATE(), INTERVAL 7 DAY) AND estado = 'A' AND f_prom != '0000-00-00'";

var getProcesses = function(order) {
    return "select proc, emp from ODT_PXO where clave = " + orden
};

var getModel = function(	order) {
    return "select descrip from ODT_SMCA where clave = " + order
};

var getAlias = function(order) {
    return "select alias from ODT_EMP where clave = " + order
};

// ---------------

connection.connect();

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
