import { mysqlDatabase } from "../database/database.js";

const getSemuaMenu = async () => {
	const daftarPengguna = await mysqlDatabase.select("*").from("menu");
	return daftarPengguna;
};

const getMenu = async (id) => {
	const pengguna = await mysqlDatabase.select("*").from("menu").where("id", id);
	return pengguna;
};

export { getSemuaMenu, getMenu };
