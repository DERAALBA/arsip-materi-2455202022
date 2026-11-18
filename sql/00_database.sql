CREATE DATABASE arsip_materi CHARACTER SET utf8mb4;

CREATE USER 'arsip'@'localhost' IDENTIFIED BY 'GANTI_SANDI';

GRANT ALL PRIVILEGES ON arsip_materi.* TO 'arsip'@'localhost';

FLUSH PRIVILEGES;