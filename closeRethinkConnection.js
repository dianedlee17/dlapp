module.exports = function closeRethinkConnection(req) {
	console.log("bye diane!");
	req.db && req.db.close()
	.catch(err => req.log.debug(err));
};
