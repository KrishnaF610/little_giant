var object = "Hallooo";

console.log(object);
console.log("Hello, World");

//ini adalah declaration variable dengan var dan init dengan value "John"
/*
halo aku belajar hal baru hari ini.
apakah kamu baik-baik saja?
*/
var name = "John";
console.log(name);

name = "Krisna"
console.log(name);

let data = "this is a simple string";
console.log(data);

data = "Krisna"
console.log(data);

let empty
console.log(empty);

const pi = 3.14 // => Variable dengan tipe data float (decimal)
const area = 10 // => Variable dengan tipe data integer (bilangan bulat)
const description = "ini adalah deskripsi" // => Variable dengan tipe data string (text)

console.log(typeof area); // => typeof untuk memastikan tipe apakah dari variable area
console.log(typeof description);

const sudahIstirahat = true; // => Variable dengan tipe data boolean (true/false)
console.log(typeof sudahIstirahat);

const profile = {
    name: "Krisna", // => Tipe data dari property name adalah string
    age: 21, // => Tipe data dari age adalah number
    address: "Ponorogo", // => Tipe data dari address adalah string
    isMariied: false, // => Tipe data dari isMarried adalah false,
    school: { // => Property dengan tipe data Object atau nested object
        name: 'IAIN Ponorogo',
        year: 2024,
    }
}

console.log(profile);
console.log(profile.name); // => Akses property name di dalam object profile
console.log(profile.school.name); // => Akses property name di dalam property school
console.log(typeof profile);

// Array
const sampleArray = [
    "A",
    true,
    { name: "Krisna" } // => Array of Object
]

console.log(typeof sampleArray);

const scores = [70, 80, 90, 95]; // => 70 itu merupakan element dari Array yang berlokasi di index ke 0

/**
 * Setiap data di dalam Array memiliki index sebagai urutan atau lokasi data tersebut
 * 
 * Dan Array itu selalu dimulai dengan index 0 yang artinya data pertama dalam Array,
 * 
 * dalam contoh di ata index ke 0 adalah 70
 */
console.log(scores[0]); // => Akses Array menggunakan index

scores[0] = 50; // => Merubah isi element dari Array index ke 0

console.log(scores[0]); // => output: 50

const fruits = ["apple", "banana", "kiwi"];

console.log(fruits); // => Output apple, banana, kiwi

fruits.push("orange"); // => Menambah element di akhir Array

console.log(fruits); // => Output apple, banana, kiwi, orange

fruits.unshift("manggo"); // => Menambahkan element di awal Array

console.log(fruits); // => Output manggo, apple, banana, kiwi, orange

fruits.pop("orange"); // => Menghapus element di akhir Array

console.log(fruits); // => Output manggo, apple, banan, kiwi

fruits.shift("manggo"); //= Menghapus element di awal Array

console.log(fruits); // => Output apple, banana, kiwi

console.log(fruits.length); // => Memastikan panjang dari Array

const moreFruits = ["orange", "grape"];

const allFruits = fruits.concat(moreFruits); // => Menggabungkan 2 Array menjadi satu

console.log(allFruits); // => Output apple, banana, kiwi, orange, grape



/**
 * 
 * let i = 0 adalah definisi dari index Array yang mau kita mulai perulangannya. jika i ini isinya 0
 * maka Array akan di akses dari index ke 0
 * 
 * i < foods.lenght adalah condition, yang berarti vatiable i itu tidak boleh kurang dari
 * foods.lenght atau dalam kasus ini index itu tidak boleh melebihi panjang Array
 * 
 * i++ adalah post statement yang berarti, ketika condition i < foods.lenght itu terpenuhi, 
 * maka nilai i akan ditambah 1.
 * 
 * ++ merupakan increment (atau menambah 1)
 * -- merupakan decrement (atau mengurangi 1)
 * 
 * 
 */

const foods = ["noodle", "egg", "rice"];
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}

console.log("Perulangan Berhasil");

// 2 dimensi Array
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][1]); // => Output 5

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);        
    }
}

// multi dimensi Array
const matrixs = [ // => Dimensional Array
    [
        [1, 2, 3],
        [4, 5, 6],
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
];

console.log(matrixs[0][1][2]); // => Output 6


// Segitiga kanan
for (let i = 0; i < 5; i++) {
    let str = "* "

    console.log(str.repeat(i));
}


let x = 5
for (let i = 0; i < x; i++) {
    let str = "* "
    let space = " "
    console.log(space.repeat((x - i)) + str.repeat(i));
}


const isLoggedin = true;

/**
 * ketika variable dalam kondisi if () bernilai boolean cukup gunakan nama variable jika ingin,
 * memeriksa bahwa itu benar atau true. Jika ingin memeriksa jika itu salah cukup gunakan !namaVariable
 * yang artinya ! melambangkan negativ value dalam kasus boolean negativ adalah false
 */

if (isLoggedin) { // => untuk tipe data boolean kita hanya cukup masukan kondisi true atau false
    console.log("Halo Admin");
} else {
    console.log("Harap Tungu");
}

const baju = "Putih";

if (baju === "Putih") { // => Kalau tipe datanya bukan boolean kita harus pakai operasi === atau !==
    console.log("Baju bersih");
} else if (baju === "Merah") {
    console.log("Baju warna merah");
} else {
    console.log("Baju kotor");
}