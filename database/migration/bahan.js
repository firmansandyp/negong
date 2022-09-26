import { mysqlDatabase } from "../database.js";

const buatTabelBahan = async () => {
	await mysqlDatabase.schema
		.createTable("bahan", (table) => {
			table.increments("id").primary();
			table.string("nama").unique().notNullable();
			table.integer("stok").defaultTo(0);
			table.string("deskripsi");
			table.datetime("tanggal_restok");
		})
		.then(console.log("Tabel 'bahan' berhasil dibuat"));
};

const hapusTabelBahan = async () => {
	await mysqlDatabase.schema.dropTableIfExists("bahan").then(console.log("Tabel 'bahan' berhasil dihapus"));
};

export { buatTabelBahan, hapusTabelBahan };
