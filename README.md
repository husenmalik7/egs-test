# Schedule

---

## 📑 Daftar Isi

- [📖 API Documentation](#-api-documentation)
- [📁 Struktur Folder](#-struktur-folder)
- [🛠️ Instalasi \& Konfigurasi](#️-instalasi--konfigurasi)
- [🔐 ENV](#-env)

---

## 📖 API Documentation

[Documentation](https://documenter.getpostman.com/view/9925894/2sB3WyJwDW)

## 📁 Struktur Folder

```
.
├── migration/               # File migrasi database
├── src/
│   ├── api/                 # Handler & route terkait API
│   ├── exceptions/          # Kumpulan custom error handling
│   ├── services/
│   │   └── postgres/        # Service untuk PostgreSQL
│   ├── utils/               # Utility untuk format apapun
│   └── validator/           # Validasi input dari pengguna
```

## 🛠️ Instalasi & Konfigurasi

<details>
<summary>Instalasi & Konfigurasi (click me)</summary>

### 1. Clone repository ini

```
git clone https://github.com/husenmalik7/egs-test.git


```

### 2. Install repository

```
npm install

```

### 3. Buat database postgreSQL (misal dengan akun postgres) _pertama login terlebih dahulu dan masukan password_

```
psql --username postgres

```

### 4. Buat database postgreSQL (misal dengan nama database = egs) pada cmd

```
CREATE DATABASE egs;
GRANT ALL ON DATABASE egs TO developer;
ALTER DATABASE egs OWNER TO developer;

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
