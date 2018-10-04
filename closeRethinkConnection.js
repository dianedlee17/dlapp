module.exports = function closeRethinkConnection(req) {
	req.db && req.db.close()
	.catch(err => req.log.debug(err));
	console.log("bye diane!");
};
