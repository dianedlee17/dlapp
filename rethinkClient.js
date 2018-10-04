var r = require("rethinkdb");

const rethink_config = {
	host: process.env.RETHINK_HOST,
	port: process.env.RETHINK_PORT,
	db: process.env.RETHINK_DB,
	user: process.env.RETHINK_USER,
	password: process.env.RETHINK_PASSWORD || process.env.RETHINK_AUTHKEY,
	// timeout: process.env.RETHINK_CONNECT_TIMEOUT,
};

module.exports = function (config) {
	return r.connect({
		host: rethink_config.host,
		port: rethink_config.port,
		db: rethink_config.db,
		user: rethink_config.user,
		password: rethink_config.password
	})
	.catch(err => {
		console.error(err.stack);
		process.exit(1);
	});
};