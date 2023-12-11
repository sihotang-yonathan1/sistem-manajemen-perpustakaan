# Sistem Informasi Perpustakaan
> Aplikasi ini masih belum stabil dan masih belum memiliki beberapa fitur

Aplikasi ini merupakan aplikasi manajemen perpustakaan yang dapat digunakan untuk mengelola buku-buku yang ada.

Aplikasi ini dibuat dengan beberapa tech stack seperti:
- Nextjs
- TailwindCSS
- Prisma

## Instalasi
Untuk dapat menggunakan aplikasi ini ada beberapa tahap yang perlu dilakukan

### Persiapan
Pastikan anda sudah menginstal nodejs, DBMS (Seperti mariadb). Untuk mempermudah, silakan untuk memasukkan path NodeJS ke PATH agar command `npm` dapat diakses melalui direktori manapun

### 1. Download atau clone repository ini  
Jika anda menggunakan git, anda dapat mengetikkan perintah ini pada terminal atau command prompt
```shell
# clone dari server
git clone "https://github.com/sihotang-yonathan1/sistem-manajemen-perpustakaan.git"

# pindah ke direktori program
cd sistem-manajemen-perpustakaan
```

atau sebagai alternatifnya, anda dapat mendownload bentuk arsip (zip) dan kemudia ekstrak dan masuk ke direktori `sistem-manajemen-perpustakaan`
### 2. Install dependency yang dibutuhkan
Pastikan anda sudah menginstal nodejs
```shell
npm install
```
### 3. Nyalakan database dan configurasi di file `.env` 
Buatlah file baru (jika belum ada) yang bername `.env` tepat didalam direktori `sistem-manajemen-perpustakaan`.
Template configurasinya sebagai berikut
```ini
DATABASE_URL="db_type://username:password@host:post/db_name"
``` 
Jadi, jika anda memiliki username `joko` dengan password `mypassword` dan database `mydb` dengan port 3306, anda dapat membuatnya seperti ini (dengan asumsi pengguna tersebut menggunakan `mysql`):
```ini
DATABASE_URL="mysql://joko:mypassword@localhost:3306/mydb"
``` 
Bagian password dapat dihilangkan jika tidak memiliki password
```ini
# jika tidak memiliki password
DATABASE_URL="mysql://joko@localhost:3306/mydb"
```

#### Secara Manual
Setelah menyalakan dan mengoneksikan database, pastikan anda telah membuat tabel-tabel yang dibutuhkan. Jika ingin lebih mudah, anda dapat memakai schema prisma untuk memasukkan tabel.

```
npx prisma db push
```

Untuk menampilkan data, anda dapat memasukkan data-data dahulu ke tabel yang sudah dibuat pada DBMS anda. Untuk login, anda dapat memasukkan data ke tabel `account` dengan perintah seperti berikut:
```sql
INSERT INTO account (username, password, role) VALUES (admin, admin, admin)
```
Pastikan memasukkan role sebagai admin untuk memiliki hak akses penuh

#### Menggunakan database tes
Anda dapat menggunakan database yang digunakan untuk uji coba dengan cara mengimport file sql yang ada pada `test_db/sistem_manajemen_perpustakaan.sql`. 
Untuk mengimpor file tersebut, masukkan command berikut di command prompt (Windows) atau terminal (Linux, MacOS)
```shell
## untuk mysql atau mariadb
mysql -u username -p nama_database < path/ke/sql/sistem_manajemen_perpustakaan.sql
```

### 4. Nyalakan web server
Nyalakan web servernya dengan cara mengetikkan
```shell
npx next dev
# atau dapat menggunakan command dibawah
npm run dev
```

### 5. Buka browser dengan alamat konfigurasi web server
Secara default, aplikasi ini berjalan pada `http://localhost:3000`. Anda dapat mengetikkan url ini di browser untuk mengakses aplikasi

## Tentang Pengembang
Aplikasi ini dibuat oleh Kelompok 3 dalam MK Sistem Informasi
