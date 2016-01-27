// responsible for getting stories from the db...interacting, updating
// deleting, adding

'use strict';

var connPool;

var Story = { //creates new story object
    //defines a new function
    getAll() {
        var sql = `SELECT * FROM stories ORDER BY votes desc, 
            createdOn desc limit 50`;
        return connPool.queryAsync(); //execute query against db...returns a promise
    }
};

module.exports.Model = function(connectionPool) {
    connPool = connectionPool;
    return Story;
}

