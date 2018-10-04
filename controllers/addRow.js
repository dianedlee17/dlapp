const r = require("rethinkdb");

module.exports = (conn, dbid, dbvalue) => {
    return r.table("idk").insert([
        //{ idkId: "dbid from form", idkValue: "dbvalue from form"}
        { idkId: "testId", idkValue: "testValue"}
    ]).run(connection, function(err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result, null, 2));
    });
};