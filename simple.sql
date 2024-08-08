# ini untuk membuat Database
CREATE DATABASE sample_database;

# ini untuk drop Database
DROP DATABASE sample_database;

USE sample_database;

CREATE TABLE students (
    id bigint PRIMARY KEY AUTO_INCREMENT,
    name varchar(191) not null,
    grade varchar(191) not null
);

# Kalau Values itu kalian bisa melakukan penambahan banyak sekaligus
# Kalau value kalian hanya bisa menambahkan 1 record saja
INSERT INTO students (name, grade) VALUES 
('Krisna Alim', 'B'),
('Azifa Nur', 'B');

# * artinya memilih semua column untuk ditampilkan
SELECT * FROM students;

# WHERE Keyword digunakan untuk sebagai filter
# dalam kasus ini kita ingin mencari students dengan grade B 
SELECT * FROM students WHERE grade = 'B';

# * kita ganti menjadi name column/field yang artinya kita hanya ingin menampilkan
# nama dari students
SELECT name FROM students;

# kalau kita tidak memasukkan keyowrds where maka kita akan melakukan update seluruh Database
# jika kita menggunakan where atau kondisi kita akan merubah data yang ingin kita pilih saja
UPDATE students SET grade = 'B+' WHERE grade = 'B';
# Sama dengan update jika kita menggunakan kondisi atau where maka kita akan menghapus semua data
# Jika kita ingin menghapus data yang kita pilih maka gunakan where
DELETE FROM students where id = 2;



CREATE TABLE teachers (
    id bigint PRIMARY Key AUTO_INCREMENT,
    name varchar(191) not null
);

# column teacher_id pada table classes merupakan foreign key atau penghubung antara table,
# teachers dan classes dimana 1 kelas itu dimiliki oleh 1 guru (One to One) atau
# 1 guru bisa punya banyak kelas (One to Many)
# Cara mendefinisikan forign key cukup dengan
# CONSTRAINT FOREIGN KEY (column) REFERENCE <table> (column) (option)
CREATE TABLE classes (
    id bigint PRIMARY KEY AUTO_INCREMENT,
    teacher_id bigint not null,
    NAME varchar(191) not null

    CONSTRAINT
        FOREIGN KEY (teacher_id)
        REFERENCES teachers (id) ON DELETE CASCADE
);

INSERT INTO teacher_id (name) VALUE ('Wira');

# Ketika kita mau menambahkan data relational kita perlu tahu dulu id dari parent table
# dalam kasus ini parent table adalah teacher, dimana kita mau menambahkan kelas
# terhadap teacher dengan nama Wira, dimana Wira memiliki 2 kelas yaitu sistem Informasi dan
# Teknik Informasi
INSERT INTO classes (teacher_id, name) VALUES
(1, 'Sistem Informasi'),
(1, 'Teknik Informasi');

# dalam proses pengambilan data dari 2 atau lebih table kita perlu melakukan pemanggilan
# column dengan nama <table>.<column>. Jika data yang ingin kita tampilkan ganti nama,
# column gunakan AS sebagai alias atau pengganti sementara dari nama column
# Dalam kasus ini kita mencoba mengganti data dari table classes dan ingin menambahi data
# Guru berdasarkan column teacher_id yang ada di table classes dengan menggunakan INNER JOIN
# dimana INNER JOIN membutuhkan foreign key sebagai kunci asing atau sebagai izin untuk
# mengakses table yang kita mau, dalam hal ini table teachers yang akan kita ambil datanya
SELECT 
    classes.name as nama_kelas, 
    teachers.name as nama_guru
FROM classes
INNER JOIN teachers on classes.teacher_id = teachers.id