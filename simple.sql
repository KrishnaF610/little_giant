# ini untuk membuat Database
CREATE DATABASE sample_database;

# ini untuk drop Database
DROP DATABASE sample_database;

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