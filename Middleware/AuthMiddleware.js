const cekStatusLogin = (request, response, next) => {
	if (request.session.login){
		return next();
	}else{
		return response.redirect("back");
	}
};

const cekPeranPemilik = (request, response, next) => {
	if(request.session.login.peran === "pemilik"){
		return next();
	}else{
		return response.redirect("back");
	}
}

const cekPeranPegawai = (request, response, next) => {
	if(request.session.login.peran === "pegawai"){
		return next();
	}else{
		return response.redirect("back");
	}
}

const cekPeranPelanggan = (request, response, next) => {
	if(request.session.login.peran === "pelanggan"){
		return next();
	}else{
		return response.redirect("back");
	}
}