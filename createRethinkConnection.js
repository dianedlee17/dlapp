const rethinkClient = require("./rethinkClient");
module.exports = function createRethinkConnection(req, res, next) {
	rethinkClient()
	.then(conn => {
		req.db = conn;
		this._rdbConn = conn;
		next();
	})
	.catch(err => {
		console.error(err.stack); // eslint-disable-line no-console
	});
	console.log("hi diane!")
};
