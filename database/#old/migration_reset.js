import { mysqlPool } from "./database.js";
import { getMysqlConnection, executeQuery } from "../Controller/DatabaseController.js";

const mysqlConn = await getMysqlConnection(mysqlPool);

try {
	let query = "DROP TABLE IF EXISTS " + 
        // "sessions," +
        "menu_pesanan," +
        "bahan_menu," +
        "riwayat_pembayaran," +
        "pesanan," +
        "menu," +
        "bahan," +
        "pengguna;";
	await executeQuery(mysqlConn, query, []);
	console.log(".: Seluruh tabel berhasil dihapus");
} catch (error) {
	console.log(error);
}

mysqlConn.release();

process.exit();