import { mysqlDatabase } from "../database.js";

const buatTabelMenu = async () => {
	await mysqlDatabase.schema
		.createTable("menu", (table) => {
			table.increments("id").primary();
			table.string("nama").unique().notNullable();
			table.integer("harga").unsigned().notNullable();
			table.string("deskripsi");
			table.datetime("tanggal_tambah").defaultTo(mysqlDatabase.fn.now());
		})
		.then(console.log("Tabel 'menu' berhasil dibuat"));
};

const hapusTabelMenu = async () => {
	await mysqlDatabase.schema.dropTableIfExists("menu").then(console.log("Tabel 'menu' berhasil dihapus"));
};

export { buatTabelMenu, hapusTabelMenu };
