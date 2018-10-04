const rethinkClient = require("./rethinkClient");
module.exports = function createRethinkConnection(req, res, next) {
	rethinkClient()
	.then(conn => {
		req.db = conn;
		this._rdbConn = conn;
		console.log("hi diane!")
		next();
	})
	.catch(err => {
		console.error(err.stack); // eslint-disable-line no-console
	});
};
