"use strict";
require("dotenv").config();

const tableSettingsDefaults = {
	shards: 3,
	replicas: 3
};

if (!process.env.NODE_ENV) {
	throw new Error("Must specify environment defined by NODE_ENV");
}

const env = process.env.NODE_ENV;
const dbSettings = require("../database.json");
const tableSettings = dbSettings[env] ? dbSettings[env]["table_settings"] || tableSettingsDefaults : tableSettingsDefaults;


exports.up = function (r, connection) {
	const tables = Promise.all([
		r.tableCreate("idk", tableSettings).run(connection),
	]);

	return tables.then(() => {
		return Promise.all([
			r.table("idk").indexCreate("idkId").run(connection),
			r.table("idk").indexCreate("idkValue").run(connection),
			r.table("idk").indexWait().run(connection),
		]);
	});
};

exports.down = function (r, connection) {
    return Promise.all([
		r.tableDrop("idk").run(connection),
	]);
};