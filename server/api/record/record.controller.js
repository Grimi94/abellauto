'use strict';

var connection = require('../../app').mysqlConnection;

var idsquery = "select id, f_prom from ODT_ORDEN where f_prom < DATE_SUB(CURDATE(), INTERVAL 7 DAY) AND estado = 'A' ";
 // var anotherquery = 'select proc, sta, emp from ODT_PXO where id_odt = 26691';
var getCurrentOrders =  "select id, color, subm, proc, cve_emp, f_prom from ODT_ORDEN where f_prom < DATE_SUB(CURDATE(), INTERVAL 7 DAY) AND estado = 'A' AND f_prom != '0000-00-00'";


var getProcesses = function(order) {
    return "select proc, emp from ODT_PXO where clave = " + order;
};

var getModel = function(	order) {
    return "select descrip from ODT_SMCA where clave = " + order;
};

var getAlias = function(order) {
    return "select alias from ODT_EMP where clave = " + order;
};

exports.index = function(req, res) {
    var orders = [];
    orders.push({
        info: "Cruze Negro Alicia 02300",
        hojalateria: true,
        mecanica: true,
        preparado: true,
        pintura: true,
        armado: true,
        tots: true,
        detallado: true,
        programacion: "LU-1",
        reproceso: ""
    },
    {
        info: "Kenji Negro Brown 02300",
        hojalateria: true,
        mecanica: true,
        preparado: true,
        pintura: true,
        armado: true,
        tots: true,
        detallado: true,
        programacion: "LU-1",
        reproceso: ""
    }
    ,
    {
        info: "Kenji Black Brown 02300",
        hojalateria: true,
        mecanica: true,
        preparado: true,
        pintura: true,
        armado: true,
        tots: true,
        detallado: true,
        programacion: "LU-1",
        reproceso: ""
    });

    res.end(JSON.stringify(orders));

    // connection.query(getCurrentOrders, function(err, rows, fields) {
    //     if (err) throw err;
    //     var orders = [];
    //     for (var i = 0; i < rows.length; i++) {
    //         var row = rows[i];
    //         var order = {};
    //         order.info = "" + row[2] + " " + row[1] + " " + row[4] + " " + row[0];
    //         order.programacion = "" + row[5];
    //         orders.push(order);
    //     }
    //
    //     console.log('database response');
    //     // console.log(rows);
    //     // console.log(fields);
    //     res.end(JSON.stringify(orders));
    // });
};
