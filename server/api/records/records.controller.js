'use strict';

/**
 * Get list of users
 * restriction: 'admin'
 */

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

};
