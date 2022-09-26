import { mysqlDatabase } from "../database.js";

const buatTabelRiwayatPembayaran = async () => {
	await mysqlDatabase.schema
		.createTable("riwayat_pembayaran", (table) => {
			table.increments("id").primary();
            table.integer("jumlah_bayar_1").unsigned().notNullable();
			table.datetime("tanggal_bayar_1").defaultTo(mysqlDatabase.fn.now());
            table.integer("jumlah_bayar_2").unsigned();
			table.datetime("tanggal_bayar_2");
			table.boolean("lunas").defaultTo(false);
			
            table.integer("id_pesanan").unsigned().notNullable();
            table.foreign("id_pesanan").references("id").inTable("pesanan").onUpdate("CASCADE").onDelete("CASCADE");
		})
		.then(console.log("Tabel 'riwayat_pembayaran' berhasil dibuat"));
};

const hapusTabelRiwayatPembayaran = async () => {
	await mysqlDatabase.schema.dropTableIfExists("riwayat_pembayaran").then(console.log("Tabel 'riwayat_pembayaran' berhasil dihapus"));
};

export { buatTabelRiwayatPembayaran, hapusTabelRiwayatPembayaran };
