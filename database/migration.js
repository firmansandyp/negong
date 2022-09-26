//NOTE
//	- knex.schema (pada kasus ini mysqlDatabase.schema) adalah  getter yang mengembalikan sebuah promise. Promise hanya akan berjalan setelah .then dipanggil.
//	- Karena knex.schema mengembalikan sebuah promise, kode seputar knex.schema harus ditulis dengan async-await.

import { mysqlDatabase } from "./database.js";
import { buatTabelPengguna, hapusTabelPengguna } from "./migration/pengguna.js";
import { buatTabelBahan, hapusTabelBahan } from "./migration/bahan.js";
import { buatTabelMenu, hapusTabelMenu } from "./migration/menu.js";
import { buatTabelPesanan, hapusTabelPesanan } from "./migration/pesanan.js";
import { buatTabelRiwayatPembayaran, hapusTabelRiwayatPembayaran } from "./migration/riwayatPembayaran.js";
import { buatTabelBahanMenu, hapusTabelBahanMenu } from "./migration/pivotBahanMenu.js";
import { buatTabelMenuPesanan, hapusTabelMenuPesanan } from "./migration/pivotMenuPesanan.js";

const rollback = async () => {
	//Tabel session
	await mysqlDatabase.schema.dropTableIfExists("sessions").then(console.log("Tabel 'sessions' terhapus"));
	//Tabel pivot
	await hapusTabelMenuPesanan();
	await hapusTabelBahanMenu();
	//Tabel utama
	await hapusTabelRiwayatPembayaran();
	await hapusTabelPesanan();
	await hapusTabelMenu();
	await hapusTabelBahan();
	await hapusTabelPengguna();
};

const migrate = async () => {
	//Tabel utama
	await buatTabelPengguna();
	await buatTabelBahan();
	await buatTabelMenu();
	await buatTabelPesanan();
	await buatTabelRiwayatPembayaran();
	//Tabel pivot
	await buatTabelBahanMenu();
	await buatTabelMenuPesanan();
};

const migrateFresh = async () => {
	await rollback();
	await migrate();
};

//process.argv[2] adalah kata ke-3 dari sebuah perintah node. Pada perintah "node migration.js run", process.argv[2] adalah "run".
switch (process.argv[2]) {
	case "rollback":
		await rollback();
		break;
	case "migrate":
		await migrate();
		break;
	case "migrateFresh":
		await migrateFresh();
		break;
	default:
		console.log("Tidak ada fungsi migrasi yang dipanggil");
		break;
}

process.exit();
