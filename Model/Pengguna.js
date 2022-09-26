import { mysqlDatabase } from "../database/database.js";

const getSemuaPengguna = async () => {
	const daftarPengguna = await mysqlDatabase.select("*").from("pengguna");
	return daftarPengguna;
};

const getPengguna = async (id) => {
	const pengguna = await mysqlDatabase.select("*").from("pengguna").where("id", id);
	return pengguna;
};

export { getSemuaPengguna, getPengguna };
