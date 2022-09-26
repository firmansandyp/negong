import { mysqlDatabase } from "../database.js";

const buatTabelMenuPesanan = async () => {
	await mysqlDatabase.schema
		.createTable("menu_pesanan", (table) => {
			table.increments("id").primary();
            table.integer("jumlah").unsigned().defaultTo(1);

            table.integer("id_menu").unsigned().notNullable();
            table.foreign("id_menu").references("id").inTable("menu").onUpdate("CASCADE").onDelete("CASCADE");
            
            table.integer("id_pesanan").unsigned().notNullable();
            table.foreign("id_pesanan").references("id").inTable("pesanan").onUpdate("CASCADE").onDelete("CASCADE");
		})
		.then(console.log("Tabel 'menu_pesanan' berhasil dibuat"));
};

const hapusTabelMenuPesanan = async () => {
	await mysqlDatabase.schema.dropTableIfExists("menu_pesanan").then(console.log("Tabel 'menu_pesanan' berhasil dihapus"));
};

export { buatTabelMenuPesanan, hapusTabelMenuPesanan };
