const r = require("rethinkdb");

module.exports = function addRow (conn, dbid, dbvalue) {
    return r.db("diane_test").table("idk").insert([
        { idkId: dbid, idkValue: dbvalue } 
    ]).run(conn, function(err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result, null, 2));
    });
};