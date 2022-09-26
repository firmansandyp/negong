import { mysqlPool } from "./database.js";
import { getMysqlConnection, executeQuery } from "../Controller/DatabaseController.js";

const mysqlConn = await getMysqlConnection(mysqlPool);

try {
	let query =
		"CREATE TABLE IF NOT EXISTS pengguna (" +
			"id					INT AUTO_INCREMENT PRIMARY KEY," +
			"role				ENUM('pemilik', 'peagwai', 'pelanggan') DEFAULT('pelanggan') NOT NULL," +
			"email				VARCHAR(100) UNIQUE NOT NULL," +
			"password			VARCHAR(100) NOT NULL," +
			"nama				VARCHAR(100) NOT NULL," +
			"telepon			VARCHAR(100)," +
			"tanggal_daftar		DATETIME NOT NULL" +
		");";
	await executeQuery(mysqlConn, query, []);
	console.log(".: Tabel 'pengguna' berhasil dibuat");
} catch (error) {
	console.log(error);
}

try {
	let query =
		"CREATE TABLE IF NOT EXISTS bahan (" +
			"id					INT AUTO_INCREMENT PRIMARY KEY," +
			"nama				VARCHAR(100) UNIQUE NOT NULL," +
			"stok				INT NOT NULL," +
			"deskripsi			VARCHAR(100)," +
			"tanggal_restok		DATETIME" +
		");";
	await executeQuery(mysqlConn, query, []);
	console.log(".: Tabel 'bahan' berhasil dibuat");
} catch (error) {
	console.log(error);
}

try {
	let query =
		"CREATE TABLE IF NOT EXISTS menu (" +
			"id					INT AUTO_INCREMENT PRIMARY KEY," +
			"nama				VARCHAR(100) UNIQUE NOT NULL," +
			"harga				INT NOT NULL," +
			"deskripsi			VARCHAR(100)," +
			"tanggal_tambah		DATETIME" +
		");";
	await executeQuery(mysqlConn, query, []);
	console.log(".: Tabel 'menu' berhasil dibuat");
} catch (error) {
	console.log(error);
}

try {
	let query =
		"CREATE TABLE IF NOT EXISTS pesanan (" +
			"id					INT AUTO_INCREMENT PRIMARY KEY," +
			"tanggal_pesan		DATETIME NOT NULL," +
			"tanggal_deadline	DATETIME NOT NULL," +
			"id_pengguna		INT NOT NULL, FOREIGN KEY(id_pengguna) REFERENCES pengguna(id)" +
		");";
	await executeQuery(mysqlConn, query, []);
	console.log(".: Tabel 'pesanan' berhasil dibuat");
} catch (error) {
	console.log(error);
}

try {
	let query =
		"CREATE TABLE IF NOT EXISTS riwayat_pembayaran (" +
			"id					INT AUTO_INCREMENT PRIMARY KEY," +
			"jumlah_bayar_1		INT NOT NULL," +
			"tanggal_bayar_1	DATETIME NOT NULL," +
			"jumlah_bayar_2		INT," +
			"tanggal_bayar_2	DATETIME," +
			"lunas				BOOLEAN DEFAULT(false) NOT NULL," +
			"id_pesanan			INT NOT NULL, FOREIGN KEY(id_pesanan) REFERENCES pesanan(id)" +
		");";
	await executeQuery(mysqlConn, query, []);
	console.log(".: Tabel 'riwayat_pembayaran' berhasil dibuat");
} catch (error) {
	console.log(error);
}

try {
	let query =
		"CREATE TABLE IF NOT EXISTS bahan_menu (" +
			"id					INT AUTO_INCREMENT PRIMARY KEY," +
			"jumlah				INT DEFAULT(1) NOT NULL," +
			"id_bahan			INT NOT NULL, FOREIGN KEY(id_bahan) REFERENCES bahan(id)," +
			"id_menu			INT NOT NULL, FOREIGN KEY(id_menu) REFERENCES menu(id)" +
		");";
	await executeQuery(mysqlConn, query, []);
	console.log(".: Tabel 'bahan_menu' berhasil dibuat");
} catch (error) {
	console.log(error);
}

try {
	let query =
		"CREATE TABLE IF NOT EXISTS menu_pesanan (" +
			"id					INT AUTO_INCREMENT PRIMARY KEY," +
			"jumlah_porsi		INT DEFAULT(1) NOT NULL," +
			"id_menu			INT NOT NULL, FOREIGN KEY(id_menu) REFERENCES menu(id)," +
			"id_pesanan			INT NOT NULL, FOREIGN KEY(id_pesanan) REFERENCES pesanan(id)" +
		");";
	await executeQuery(mysqlConn, query, []);
	console.log(".: Tabel 'menu_pesanan' berhasil dibuat");
} catch (error) {
	console.log(error);
}

mysqlConn.release();

process.exit();