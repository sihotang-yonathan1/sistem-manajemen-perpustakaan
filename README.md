# Sistem Informasi Perpustakaan
> Aplikasi ini masih belum stabil dan masih belum memiliki beberapa fitur

Aplikasi ini merupakan aplikasi manajemen perpustakaan yang dapat digunakan untuk mengelola buku-buku yang ada.

Aplikasi ini dibuat dengan beberapa tech stack seperti:
- Nextjs
- TailwindCSS
- Prisma

## Instalasi
Untuk dapat menggunakan aplikasi ini ada beberapa tahap yang perlu dilakukan

### 1. Download atau clone repository ini  
Jika anda menggunakan git, anda dapat mengetikkan perintah ini pada terminal atau command prompt
```shell
# clone dari server
git clone "https://github.com/sihotang-yonathan1/sistem-manajemen-perpustakaan.git"

# pindah ke direktori program
cd sistem-manajemen-perpustakaan
```
### 2. Install dependency yang dibutuhkan
```shell
npm install
```
### 3. Nyalakan database dan configurasi di file `.env`  
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

Setelah menyalakan dan mengoneksikan database, pastikan anda telah membuat tabel-tabel yang dibutuhkan. Jika ingin lebih mudah, anda dapat memakai schema prisma untuk memasukkan tabel.

```
npx prisma db push
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
