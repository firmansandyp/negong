import * as dotenv from "dotenv";
dotenv.config();

import knex from "knex";

const mysqlSetting = {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
};

const mysqlDatabase = knex({
	client: "mysql",
	connection: mysqlSetting,
	pool: {
		min: 0,
		max: 10,
	},
});

export { mysqlSetting, mysqlDatabase };
