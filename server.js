//============================== ENV ==============================

import * as dotenv from "dotenv";
dotenv.config();

//============================== EXPRESS FRAMEWORK ==============================

import express from "express";

const app = express();
const port = process.env.APP_PORT;
const server = app.listen(port, (error) => {
	if (error) {
		console.log(".: ERROR: App cannot listen");
	} else {
		console.log(".: Listening to port " + port);
	}
});

//============================== STATIC PATH ==============================

import path from "path";

const stylesPath = path.resolve("styles");
const assetsPath = path.resolve("assets");
const scriptsPath = path.resolve("scripts");
app.use("/styles", express.static(stylesPath));
app.use("/assets", express.static(assetsPath));
app.use("/scripts", express.static(scriptsPath));

//============================== VIEW ENGINE ==============================

app.set("view engine", "ejs");

//============================== JSON PARSER ==============================

app.use(express.json());

//============================== FORM PARSER ==============================

const formParserSetting = {
	extended: true,
};
app.use(express.urlencoded(formParserSetting));

//============================== SESSION & SESSION STORAGE ==============================

import session from "express-session";
import mysqlStore from "express-mysql-session";
import { mysqlSetting } from "./database/database.js";

const mysqlSessionStoreSetting = {
	createDatabaseTable: true,
};
const mysqlSessionStore = new mysqlStore(Object.assign(mysqlSetting, mysqlSessionStoreSetting));

const sessionSetting = {
	name: process.env.SESSION_NAME,
	secret: process.env.SESSION_SECRET,
	store: mysqlSessionStore,
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24, //1 hari
	},
};
app.use(session(sessionSetting));

//============================== ROUTE ==============================

// import { router as homeRoute } from "./routes/home.js";
// import { router as authenticationRoute } from "./routes/authentication.js";
// import { router as myRoute } from "./routes/my.js";
// import { router as threadRoute } from "./routes/thread.js";
// import { router as categoryRoute } from "./routes/category.js";

// app.use("/", homeRoute);
// app.use("/authentication", authenticationRoute);
// app.use("/my", myRoute);
// app.use("/thread", threadRoute);
// app.use("/category", categoryRoute);

// import { router as adminAuthenticationRoute } from "./routes/admin_authentication.js";
// import { router as adminHomeRoute } from "./routes/admin_users.js";
// import { router as adminThreadRoute } from "./routes/admin_thread.js";

// app.use("/admin", adminAuthenticationRoute);
// app.use("/admin_home", adminHomeRoute);
// app.use("/admin_thread", adminThreadRoute);
