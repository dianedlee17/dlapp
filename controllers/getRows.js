const r = require("rethinkdb");

module.exports = (conn, dbid, dbvalue) => {
    return r.table("idk").run(connection, function(err, result) {
        if (err) throw err;
        cursor.toArray(function(err, result) {
            if (err) throw err;
            console.log(JSON.stringify(result, null, 2));
        });
    });
};