# ROUTE

## Pemilik

/statistik

-   /pesanan?range=
-   /menu?range=
-   /bahan?range=
-   /pelanggan/{id}

## Pegawai (tidak bisa semua route di atas)

/pesanan

-   / (GET)
-   /{id}/detail (GET)
-   /{id}/selesai (POST)

/menu

-   / (GET)
-   /{id}/detail (GET)
-   /tambah (POST)
-   /{id}/update (POST)
-   /{id}/hapus (DELETE)

/bahan

-   / (GET)
-   /{id}/detail (GET)
-   /tambah (POST)
-   /{id}/update (POST)
-   /{id}/hapus (DELETE)

## Pelanggan (tidak bisa semua route di atas)

/profil

-   / (GET)
-   /update (POST)
-   /delete (DELETE)

/pesanan

-   / (GET)
-   /{id}/detail (GET)
-   /pesan (POST)

## Semua

/auth

-   /masuk (POST)
-   /daftar (POST)
-   /keluar (POST)

/about

# TABEL & MODEL

## Note

-   Migrasi tabel pivot terurut berdasarkan tanggal pembuatan source code migrasi (tanggal yang menjadi prefix dari nama file source code migrasi). Oleh karena itu, pastika tabel pivot (dan tabel dengan foreign id) dibuat belakangan.

## Tabel Utama

Pesanan | pesanan (N-to-N menu)

-   bigincrement id
-   timestamp tanggal_pesan
-   timestamp tanggal_deadline
-   foreignid pengguna_id

Menu | menu (N-to-N pesanan)(N-to-N bahan)

-   bigincrement id
-   [unique] string nama
-   integer harga
-   [nullable] text deskripsi
-   timestamp tanggal_tambah

Bahan | bahan (N-to-N menu)

-   bigincrement id
-   [unique] string nama
-   [unique] integer stok
-   [nullable] text deskripsi
-   [nullable] timestamp tanggal_restok

Pengguna | pengguna

-   bigincrement id
-   [unique] string email
-   string password
-   [nullable] string nama
-   enum peran (pemilik/pegawai/pelanggan)
-   [nullable] string telepon
-   timestamp tanggal_daftar

RiwayatPembayaran | riwayat_pembayaran

-   bigincrement id
-   foreignid pesanan_id
-   string pembayaran_1
-   string pembayaran_2
-   timestamp tanggal_bayar_1
-   [nullable] timestamp tanggal_bayar_2
-   boolean lunas

## Tabel Pivot (N-to-N)

bahan_menu

-   bigincrement id
-   foreignid bahan_id
-   foreignid menu_id
-   integer jumlah

menu_pesanan

-   bigincrement id
-   foreignid menu_id
-   foreignid pesanan_id
-   integer jumlah_porsi
-   [nullable] text permintaan_tambahan

# HALAMAN

NOTE:

-   CSS sementara, ganti pakai Bootstrap, salin dokumentasi (yang basic) ke dokumen.

## Layout

Main:

-   Header (atas)
-   Nav (kiri)
-   Content (kanan)
-   Footer (bawah)

##
