import * as dotenv from "dotenv";
dotenv.config();

import mysql from "mysql";

const mysqlSetting = {
	connectionLimit: 10,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	createDatabaseTable: true,
};

const mysqlPool = mysql.createPool(mysqlSetting);

export { mysqlSetting, mysqlPool };
