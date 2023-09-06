// Hiraukan fungsi Changetitle dan AddParagraph di bawah ini,
// fokus ke baris 15 ke bawah
function changetitle() {
  const element = document.getElementById("title");
  element.innerHTML = "Variable JavaScript";
}
changetitle();

function addparagraph() {
  const element = document.getElementById("desc");
  element.innerHTML =
    "Ini tentang pemberian nilai variable di Javascript, silakan lihat di console";
}
addparagraph();

// Pemberian nilai di JavaScript adalah 3
// Var
console.log("1. Var");

// Var adalah basic dari pembelian nilai
var variable_var = 5;
console.log(variable_var);

// Var bisa dipanggil di dalam fungsi atau di mana saja
function manggil_var() {
  console.log(variable_var);
}
manggil_var();

// Var juga bisa dideklarasi ulang
var variable_var = 25;
console.log(variable_var);

// Var juga bisa berubah nilainya
variable_var = variable_var + 5;
console.log(variable_var);

// Promt dibawah untuk membuat baris kosong atau baru di Console
console.log("\n");

// Let
console.log("2. Let");
// Let adalah basic dari pemberian nilai
let variable_let = 10;
console.log(variable_let);

// Let tidak bisa dideklarasi ulang
//
// let variable_let = 25;
// console.log(variable_let);

// Let tidak bisa dipanggil di dalam fungsi atau di mana saja
//
// function manggil_let() {
//   console.log(variable_let);
// }
// manggil_let();

// Let juga bisa berubah nilainya
variable_let = variable_let + 5;
console.log(variable_let);

// Promt dibawah untuk membuat baris kosong atau baru di Console
console.log("\n");

// Const
console.log("3. Const");
// Const adalah basic dari pemberian nilai
const variable_const = 9.8;
console.log(variable_const);

// const tidak bisa dideklarasi ulang
//
// const variable_const = 25;
// console.log(variable_const);

// const tidak bisa dipanggil di dalam fungsi atau di mana saja
//
// function manggil_const() {
//   console.log(variable_const);
// }
// manggil_const();

// const juga tidak bisa berubah nilainya
//
// variable_const = variable_const + 5;
// console.log(variable_const);
