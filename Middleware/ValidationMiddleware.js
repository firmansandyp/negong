const validateLogin = (request, response, next) => {
	const credential = {
		email: request.body.email,
		password: request.body.password,
	};

    //VALIDASI DI SINI (dianjurkan dengan PassportJS)

	if (credential) {
        response.flash("statusValidasi", "Data login anda berhasil divalidasi.")
		return next();
	} else {
        response.flash("statusValidasi", "Data login anda gagal divalidasi.")
		return response.redirect("back");
	}
};
