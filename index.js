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



/**
 * 
 * ini merupakan declaration dari sebuah function sederhana
 * declaration function di tulis dengan keywords function namaFunction()
 * Jika function tidak memiliki keywords returns dia merupakan void function
 * yang berarti function tersebut mengembalikan nilai apapun ketika digunakan
 * age = 23 itu merupakan initialization parameter dengan nilai awal atau deafult value,
 * ketika kita melakukan pemanggilaan function tanpa mengirim parameter age, maka secara default
 * age itu bernilai 23 dan jika kita memasukan nilai parameter ke 2 nilai age akan sesuai berdasarkan
 * parameter kedua yang dikirim dari pemanggilan function
 * 
 * @returns String
 */

function greet(name, age = 21) {
    // Penggunan string literal atau ` ketika ingin menggunakan variable/parameter harus dengan ${}
    return `Hello, ${name}. My age is ${age} yo`;
}

const greeting = greet("Krisna", 22); // => Jika function memiliki keywors return didalamnya bisa menggunakan variable

console.log(greeting);

console.log(greet("Krisna")); // => Function bisa digunakan langsung tanpa variable seperti contoh berikut

/**
 * 
 * * Perkalian
 * / Pembagian
 * + Penjumlahan
 * - Pengurangan
 * Satu function hanya bisa melakukan satu return
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // => Output selalu a + b dalam kasus ini argument nya bernilai 5 dan 3 hasilnya 8

function fizzBuzz(number) {
    if (number % 2 === 0) {
        return "Fizz";
    }

    if (number % 3 === 0) {
        return "Buzz";
    }

    if (number % 5 === 0) {
        return "FizzBuzz";
    }

    return "Failed";
}

console.log(fizzBuzz(2)); // => Output Fizz
console.log(fizzBuzz(3)); // => Output Buzz
console.log(fizzBuzz(5)); // => Output FizzBuzz
console.log(fizzBuzz(7)); // => Output Failed

// Fungsi anonim
const greetAnon = function(name) {
    return `Hello, ${name} from anonymous function`;
}

console.log(greetAnon("Krisna"));

// Arrow function
const greetArrow = (name) => `Hello, ${name} from Arrow Function`;

console.log(greetArrow("Azifa"));

/**
 * class itu didefinisikan dengan keywords class
 * class juga memiliki constructor, dimana constructor akan selalu diakses di awal ketika
 * kita melakukan pembuatan object baru dari class dengan keywords new Car("Toyota", "Camry", 2020)
 * pada dalam constructor kita menggunakan keywords this. untuk mendefinisikan sebuah property,
 * didalam object. Mirip dengan tipe data object lainnya class juga punya property
 */
class Car {
    constructor(name, brand, year) {
        this._name = name;
        this._brand = brand;
        this._year = year;
    }

    information() {
        return `${this.name} have brand from ${this._brand} and build in ${this._year}`;
    }

    // ini adalah setter untuk merubah nilai dari sebuah property
    setName(name) {
        this._name = name;
    }

    // ini adalah getter untuk mengambil data dari sebuah property
    getName() {
        return this.name;
    }

    // ini merupakan contoh penggunaan setters dengan keywords set
    set name(value) {
        if (value !== " ") {
            this._name = value;
        } else {
            console.log("the value must be not empty string");
        }
    }

    // ini merupakan contoh penggunaan getters dengan keywords get
    get name() {
        return this._name;
    }
}

const car = new Car("Toyota", "Camry", 2020);
console.log(car.information());
// car.setName("Daihatsu");
car.name = "Daihatsu"; // Menggunakan setter untuk merubah data dari property yang ada di class   
console.log(car.information());
console.log(car.name);


/**
 * Animal merupakan sebuah class yang memiliki property name dan method speak
 */
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

/**
 * Dog merupakan sebuah children class yang mewarisi semua yang ada di dalam class Animal,
 * baik itu property maupun method
 */
class Dog extends Animal {
    speak() {
        console.log("What the dog do'in");
    }
}

const dog = new Dog("Holy");
dog.speak();


class Cat extends Animal {
    constructor(name, color) {
        super(name)
        this.color = color;
    }

    speak() {
        super.speak();
        console.log(`${this.name} meows.`);
    }
}

const cat = new Cat("Whisker", "Gray")
cat.speak();


class MathUtil {
    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }
}

console.log(MathUtil.add(2, 2)); // Output 4
console.log(MathUtil.multiply(5, 5)); // Output 25

/**
 * 
 * Naming Convension Class biasanya menggunakan PascalCase atau sebagai contoh LoanDisbursement
 * Naming Convension variable biasanya itu camelCase atau variableName
 * Naming Convension function biasanya itu camelCase atau functionName
 * 
 */


