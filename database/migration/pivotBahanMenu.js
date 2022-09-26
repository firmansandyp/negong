import { mysqlDatabase } from "../database.js";

const buatTabelBahanMenu = async () => {
	await mysqlDatabase.schema
		.createTable("bahan_menu", (table) => {
			table.increments("id").primary();
            table.integer("jumlah").unsigned().defaultTo(1);

            table.integer("id_bahan").unsigned().notNullable();
			table.foreign("id_bahan").references("id").inTable("bahan").onUpdate("CASCADE").onDelete("CASCADE");
            
            table.integer("id_menu").unsigned().notNullable();
            table.foreign("id_menu").references("id").inTable("menu").onUpdate("CASCADE").onDelete("CASCADE");
		})
		.then(console.log("Tabel 'bahan_menu' berhasil dibuat"));
};

const hapusTabelBahanMenu = async () => {
	await mysqlDatabase.schema.dropTableIfExists("bahan_menu").then(console.log("Tabel 'bahan_menu' berhasil dihapus"));
};

export { buatTabelBahanMenu, hapusTabelBahanMenu };
