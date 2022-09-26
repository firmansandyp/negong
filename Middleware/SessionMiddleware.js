//NOTE
//  - Regenerasi session penting dilakukan di setiap layanan berbasis web dengan alasan keamanan. Session (atau Cookie) jangan sampai ditimpa dengan session (atau cookie) terekayasa oleh pengguna.
//  - Fungsi session.save() digunakan untuk menyimpan session ke store (pada kasus ini mysqlStore). Fungsi ini dipanggil secara otomatis di akhir sebuah reuqest. Apabila session perlu disimpan sebelum request selesai, fungsi ini dapat dipanggil secara manual.
const generateSession = (request, next) => {
    request.session.reload(console.log("Session reloaded"));
	request.session.regenerate(console.log("Session regenerated"));
    request.session.login = request.credential;
    request.session.save(console.log("Session stored"));
	return next();
};

const destroySession = (request, response) => {
	request.session.destroy("Session destroyed");
	return response.redirect("back");
};

export { generateSession, destroySession };
