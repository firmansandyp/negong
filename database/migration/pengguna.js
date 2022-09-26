import { mysqlDatabase } from "../database.js";

const buatTabelPengguna = async () => {
	await mysqlDatabase.schema
		.createTable("pengguna", (table) => {
			table.increments("id").primary();
			table.enu("peran", ["pemilik", "pegawai", "pelanggan"]).defaultTo("pelanggan");
			table.string("email").unique().notNullable();
			table.string("password").notNullable();
			table.string("nama").notNullable();
			table.string("telepon");
			table.datetime("tanggal_daftar").defaultTo(mysqlDatabase.fn.now());
		})
		.then(console.log("Tabel 'pengguna' berhasil dibuat"));
};

const hapusTabelPengguna = async () => {
	await mysqlDatabase.schema.dropTableIfExists("pengguna").then(console.log("Tabel 'pengguna' berhasil dihapus"));
};

export { buatTabelPengguna, hapusTabelPengguna };
