//Create, Read, Update, Delete

'use strict';

var mysql = require('mysql');
var bluebird = require('bluebird');

// id of newly inserted row
var id;

// load connection data
var dbConfig = require('./secret/config-maria.json');

// creates a connection to the database
var conn = bluebird.promisifyAll(mysql.createConnection(dbConfig));

function logRow(row) {
    console.log(row);
}

conn.queryAsync('INSERT INTO stories (url) values (?)', ['http://www.google.com'])
    .then(function(results) {
        console.log('row inserted, new id = %s', results.insertId);
        id = results.insertId;
        return conn.queryAsync('SELECT * FROM stories WHERE id=?', [results.insertId]);
    })
    .then(logRow)
    .then(function(rows) {
//        logRow(rows[0]);
        return conn.queryAsync('UPDATE stories set votes=votes+1 where id=?', [id]);
    })
    .then(function(results) {
        console.log('%d rows affected', results.affectedRows);
        return conn.queryAsync('select * from stories where id=?', [id]);
    })
    // .then(function(row) {
    //     logRow.rows[0];
    // })
    .then(logRow)
    .then(function() {
        return conn.queryAsync('DELETE FROM stories WHERE id=?', [id]);
    })
    .then(function(results) {
        console.log('%d rows affected', results.affectedRows);
    })
    .then(function() {
        conn.end();
    })
    .catch(function(err) {
        console.error(err);
        conn.end();
    });
