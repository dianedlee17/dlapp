const r = require("rethinkdb");

module.exports = function getRows (conn) {
    return r.table("idk").run(conn, function(err, result) {
        if (err) throw err;
        cursor.toArray(function(err, result) {
            if (err) throw err;
            console.log(JSON.stringify(result, null, 2));
        });
    });
};