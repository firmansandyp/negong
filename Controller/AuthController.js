import { mysqlDatabase } from "../database/database.js";

const renderAuth = (request, response) => {
	let namaHalaman = "";
	switch (request.originalUrl) {
		case "/auth/masuk":
			namaHalaman = "Masuk";
			break;
		case "/auth/daftar":
			namaHalaman = "Daftar";
			break;
		default:
			namaHalaman = "Auth";
			break;
	}
	return response.render("auth", {
		namaHalaman: namaHalaman,
	});
};

const login = async (request, response, next) => {
	const pengguna = mysqlDatabase.select("*").from("pengguna").where({
		email: request.credential.email,
		password: request.credential.password,
	});
	if (pengguna) {
		response.flash("statusLogin", "Anda berhasil masuk.");
		return next();
	} else {
		response.flash("statusLogin", "Anda gagal masuk.");
		return response.redirect("back");
	}
};

export { renderAuth, login };
