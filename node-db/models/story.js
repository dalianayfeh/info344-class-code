// responsible for getting stories from the db...interacting, updating
// deleting, adding

'use strict';

var connPool;

var Story = { //creates new story object
    //defines a new function
    getAll() {
        var sql = `SELECT * FROM stories ORDER BY votes desc, 
            createdOn desc limit 50`;
        return connPool.queryAsync(sql); //execute query against db...returns a promise
    }, 
    
    insert(story) {
        //validate data
        var sql = 'insert into stories (url) values (?)';
        var params = [story.url];
        return connPool.queryAsync(sql, params) //params inserts data in place of ?
            .then(function(results) {
                sql = 'select * from stories where id=?';
                params = [results.insertId]; //newly assigned id from db
                return connPool.queryAsync(sql, params);
            })
            .then(function(rows) {
                //if the length is greater than 0 return the first row, else return null
                return rows.length > 0 ? rows[0] : null; 
            });
    }, 
    
    upVote(id) {
        var sql = 'update stories set votes=votes+1 where id=?';
        var params = [id];
        return connPool.queryAsync(sql, params)
            .then(function(results) {
                sql = 'select * from stories where id=?';
                return connPool.queryAsync(sql, params);
            })
            .then(function(rows) {
                //if the length is greater than 0 return the first row, else return null
                return rows.length > 0 ? rows[0] : null; 
            });
    }
};

module.exports.Model = function(connectionPool) { //exports initially set as empty javascript object.
    connPool = connectionPool;
    return Story;
}

