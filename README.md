# 🔎 Ketemukan-BE

![Logo](./ketemukan.png)

Ketemukan adalah aplikasi web yang dikembangkan untuk memudahkan siapa saja dalam melaporkan barang hilang atau barang temuan, kapanpun dan di manapun. Terinspirasi dari situasi nyata di mana orang sering kehilangan atau menemukan barang tanpa tahu harus melapor ke mana, Ketemukan hadir sebagai solusi digital. Bersama Ketemukan, pasti ketemu-kan

---

## 📑 Daftar Isi

- [🚀 Fitur Utama](#-fitur-utama)
- [🧮 Formula Point](#-formula-point)
- [🧮 Formula Achievement](#-formula-achievement)
- [🗃️ ERD / Struktur Tabel](#️-erd--struktur-tabel)
- [🌐 API Base URL / Deployment](#-api-base-url--deployment)
- [📖 API Documentation](#-api-documentation)
- [📁 Struktur Folder](#-struktur-folder)
- [🛠️ Instalasi \& Konfigurasi](#️-instalasi--konfigurasi)
- [🔐 ENV](#-env)
- [🧰 Tech Stack / Dependencies](#-tech-stack--dependencies)
- [🛎️ Tools](#️-tools)
- [👨‍💻 Pengembang](#-pengembang)

---

## 🚀 Fitur Utama

- Login/Register User
- Kelola User (update profile user)
- Post barang hilang atau barang ditemukan
- Lihat, cari, filter barang hilang atau barang ditemukan
- Lihat informasi detail dari item yang telah dipost
- Kelola item yang telah dipost (update/delete item)
- Berikan komentar atau informasi pada item yang telah dipost
- Raih point dan achievement dari post item atau komentar

## 🧮 Formula Point

- Setiap user yang mempost barang ditemukan akan mendapatkan 50 point
- Setiap user yang mempost barang hilang akan mendapatkan 20 point
- Setiap user yang berkomentar pada detail item akan mendapatkan 10 point

## 🧮 Formula Achievement

<details>
<summary>Formula achievement (click me)</summary>

| No  | Name                | Description                                                             | Condition Type | Condition Value |
| --- | ------------------- | ----------------------------------------------------------------------- | -------------- | --------------- |
| 1   | Bounty Hunter       | Kamu sudah berhasil menemukan 10 barang — pencarianmu dimulai!          | found_items    | 10              |
| 2   | Sharp Eye           | Matamu tajam! Kamu berhasil menemukan 20 barang.                        | found_items    | 20              |
| 3   | Tracking Master     | Kamu adalah ahli dalam menemukan barang — 50 pencapaian hebat!          | found_items    | 50              |
| 4   | Legend of the Found | Kamu adalah legenda di dunia barang hilang. Tak tertandingi.            | found_items    | 100             |
| 5   | Where Is It?        | "Loh, ilang lagi?" — kayaknya kamu kurang update sama barang sendiri 😅 | lost_items     | 5               |
| 6   | The Forgetful       | Kamu dan barangmu tampaknya sering beda jalan. Hati-hati, ya!           | lost_items     | 10              |
| 7   | Lost Master         | Saat orang lain kehilangan kunci, kamu kehilangan satu kota.            | lost_items     | 20              |
| 8   | Help me!            | Kamu perlu GPS buat hidupmu sendiri. 100 kali kehilangan, serius? 😭    | lost_items     | 100             |
| 9   | Helpful Citizen     | Baru 5 komentar, tapi udah mulai peduli. Warga yang layak dicontoh 👍   | comments       | 5               |
| 10  | Quick Responder     | Gak perlu disuruh, langsung bantu jawab. Mantap!                        | comments       | 10              |
| 11  | Lost & Found Friend | Kamu selalu hadir waktu orang lain kehilangan. Baik banget sih 😢       | comments       | 20              |
| 12  | Comment Champion    | Kamu udah kayak admin, tapi tanpa gaji. Tetap setia bantuin! 🫡          | comments       | 50              |
| 13  | Keyboard Hero       | Menolong tanpa jubah, cuma modal keyboard dan niat baik 💻              | comments       | 75              |
| 14  | Golden Citizen      | Kamu layak dikasih penghargaan RT. Seratus komentar penuh empati 🥇     | comments       | 100             |

</details>

## 🗃️ ERD / Struktur Tabel

<details>
<summary>ERD (click me)</summary>

![ERD](./ERD.png)

</details>

## 🌐 API Base URL / Deployment

Deployment menggunakan [railway](https://railway.com/) free tier

| Base URL                                             | Owner                                         | Status                      |
| ---------------------------------------------------- | --------------------------------------------- | --------------------------- |
| https://ketemukan-be-production-7e9f.up.railway.app/ | [husenmalik8](https://github.com/husenmalik8) | Died 😵                     |
| https://ketemukan-be-production.up.railway.app/      | [husenmalik9](https://github.com/husenmalik9) | Active 🙂 (Until 25 August) |

## 📖 API Documentation

[Documentation](https://documenter.getpostman.com/view/9925894/2sB3B8tDZV)

## 📁 Struktur Folder

```
.
├── migration/               # File migrasi database
├── src/
│   ├── api/                 # Handler & route terkait API
│   ├── cloudinary/          # Konfigurasi cloudinary
│   ├── exceptions/          # Kumpulan custom error handling
│   ├── services/
│   │   ├── postgres/        # Service untuk PostgreSQL
│   │   └── storage/         # Service untuk cloudinary
│   ├── tokenize/            # Utility untuk JWT
│   └── validator/           # Validasi input dari pengguna
```

## 🛠️ Instalasi & Konfigurasi

<details>
<summary>Instalasi & Konfigurasi (click me)</summary>

### 1. Clone repository ini

```
git clone https://github.com/husenmalik9/ketemukan-be.git

```

### 2. Install repository

```
npm install

```

### 3. Buat database postgreSQL (misal dengan akun postgres) _pertama login terlebih dahulu dan masukan password_

```
psql --username postgres

```

### 4. Buat database postgreSQL (misal dengan nama database = ketemukan_v2_2)

```
CREATE DATABASE ketemukan_v2_2;
GRANT ALL ON DATABASE ketemukan_v2_2 TO developer;
ALTER DATABASE ketemukan_v2_2 OWNER TO developer;

```

### 5. Jalankan migrasi

```
npm run migrate up
```

### 6. Jalankan server via start atau development

```
npm run start
or
npm run dev
```

</details>

## 🔐 ENV

Buat file .env dengan format sebagai berikut:

<details>
<summary>.env (click me)</summary>

```
# server configuration
HOST=
PORT=

# node-postgres configuration
PGUSER=
PGPASSWORD=
PGDATABASE=
PGHOST=
PGPORT=

ACCESS_TOKEN_KEY=
REFRESH_TOKEN_KEY=
ACCESS_TOKEN_AGE=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

```

</details>

## 🧰 Tech Stack / Dependencies

- [![Hapi](https://img.shields.io/badge/@hapi/hapi-v21.4.0-green)](https://www.npmjs.com/package/@hapi/hapi)
- [![Inert](https://img.shields.io/badge/@hapi/inert-v7.1.0-green)](https://www.npmjs.com/package/@hapi/inert)
- [![JWT](https://img.shields.io/badge/@hapi/jwt-v3.2.0-green)](https://www.npmjs.com/package/@hapi/jwt)
- [![bcrypt](https://img.shields.io/badge/bcrypt-v6.0.0-orange)](https://www.npmjs.com/package/bcrypt)
- [![Cloudinary](https://img.shields.io/badge/cloudinary-v2.7.0-lightgrey)](https://www.npmjs.com/package/cloudinary)
- [![datauri](https://img.shields.io/badge/datauri-v4.1.0-lightgrey)](https://www.npmjs.com/package/datauri)
- [![dotenv](https://img.shields.io/badge/dotenv-v17.0.0-yellowgreen)](https://www.npmjs.com/package/dotenv)
- [![joi](https://img.shields.io/badge/joi-v17.13.3-yellow)](https://www.npmjs.com/package/joi)
- [![nanoid](https://img.shields.io/badge/nanoid-v3.3.11-lightblue)](https://www.npmjs.com/package/nanoid)
- [![node-pg-migrate](https://img.shields.io/badge/node--pg--migrate-v8.0.3-blueviolet)](https://www.npmjs.com/package/node-pg-migrate)
- [![pg](https://img.shields.io/badge/pg-v8.16.3-blue)](https://www.npmjs.com/package/pg)

## 🛎️ Tools

- **VSCode** sebagai kode editor
- **HeidiSQL** untuk mengelola dan memantau database secara visual
- **Postman** untuk menguji endpoint API
- **GitHub** sebagai version control

## 👨‍💻 Pengembang

[Husen Malik](https://github.com/husenmalik7)
