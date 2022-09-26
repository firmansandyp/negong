import { mysqlDatabase } from "../database.js";

const buatTabelPesanan = async () => {
	await mysqlDatabase.schema
		.createTable("pesanan", (table) => {
			table.increments("id").primary();
			table.datetime("tanggal_pesan").defaultTo(mysqlDatabase.fn.now());
			table.datetime("tanggal_deadline");

            table.integer("id_pengguna").unsigned().notNullable();
			table.foreign("id_pengguna").references("id").inTable("pengguna").onUpdate("CASCADE").onDelete("CASCADE");
		})
		.then(console.log("Tabel 'pesanan' berhasil dibuat"));
};

const hapusTabelPesanan = async () => {
	await mysqlDatabase.schema.dropTableIfExists("pesanan").then(console.log("Tabel 'pesanan' berhasil dihapus"));
};

export { buatTabelPesanan, hapusTabelPesanan };
