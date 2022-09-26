import { getSemuaMenu } from "../Model/Menu.js";

const renderDaftarMenu = (request, response) => {
	return response.render("menu", {
        namaHalaman: "Daftar Menu",
		daftarMenu: getSemuaMenu(),
	});
};

export { renderDaftarMenu };
