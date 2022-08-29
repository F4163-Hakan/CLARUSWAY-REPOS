// ?=========================================================
// ?                DIZILER (ARRAYS)
// ?=========================================================

console.log("***** ARRAYS ******");

//* Dizi Tanimlama
//* ---------------------------------------------------------

// ! 1.Yöntem (Array Literal) - Tercih edilen yöntem
const isimler = ["ahmet", "ismet", "can", "canan", "matheww"];
console.log(isimler);
console.log(typeof isimler);
console.log(isimler.length);

const bosDizi = [];
console.log(bosDizi);

// ! 2.Yöntem (Object Constructor)
const diller = new Array("C++", "javascript", "Assembly", "Go", "Ruby");
console.log(diller);

const numbers = new Array(3, 2, 1);
console.log(numbers);

//! 10 elemanlik bos bir Array oluşturdu
const numbers1 = new Array(10);
console.log(numbers1);

// ! 3.Yöntem (Array.of())
const veriler = Array.of(1, 2, 3);
console.log(veriler);

const veri = Array.of("Deneme");
console.log(veri);

//* Diziden Veri Okuma-Yazma (indisleme)
//* ---------------------------------------------------------
//!  Diziden veri okuma
console.log(diller[1]);
const go = diller[3];
console.log(go);

console.log(isimler[isimler.length - 1]);
//? at()
console.log(isimler.at(-1));

//!  Diziye veri yazma
// const isimler = ["ahmet", "ismet", "can", "canan", "Matheww"];
isimler[1] = "saffet";
console.log(isimler);

//!Uncaught TypeError: Assignment to constant variable.
// isimler = ["Ali", "Veli"];

//? numbers dizisinin son elementinin degerini bir arttirin
console.log(numbers);
numbers[numbers.length - 1]++;
console.log(numbers);

const yaslar = [22, 44, 55];
const kisiler = ["Ahmet", "Can", 2022, 2022 - 1990, true, yaslar];

console.log(kisiler);

//? kisiler icerisindeki yaslar dizisinde bulunan 55 yasini konsola yazdiriniz.

const yas55 = kisiler[5][2];
console.log(yas55);

//? kisiler icerisindeki yaslar dizisinde bulunan 44 yasini bir eksiltiniz.
kisiler[5][1]--; //?43
console.log(kisiler);
console.log(yaslar);

//? ===========================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//? ===========================================================

const arabalar = ["BMW", "Mercedes", "Fiat", "Anadol"];

//** pop() son elemanı siler ve sildigi elemani dondurur.
const silinen = arabalar.pop();
console.log(arabalar, silinen);

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.

const n = arabalar.push("Citroen");
console.log(arabalar, n);

//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
const n1 = arabalar.unshift("Audi");
console.log(arabalar, n1);

//* dizinin 0. indeks elemanini siler ve silenen elemani dondurur
const audi = arabalar.shift();
console.log(arabalar, audi);

//* splice()
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri
arabalar.splice(1, 0, "Passat");
console.log(arabalar);

arabalar.splice(3, 1, "Honda", "Toyota");
console.log(arabalar);

//* Dizinin tamamini ters siraya cevirir.
arabalar.reverse();
console.log(arabalar);

//* sort() Diziyi alfabetik olarak siralar.
isimler.sort();
console.log(isimler);

//! Alfabetik siraladigi icin dogru sonuc cikmayabilir.
const sayilar = [2, 111, 3, 22, 1, 11, 5, 7, 6];
sayilar.sort();
console.log(sayilar);

//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.
sayilar.sort((a, b) => a - b);
console.log(sayilar);

//* fill()
const array1 = [1, 2, 3, 4];
array1.fill(0);
console.log(array1);

array1.fill(1, 2, 4);
console.log(array1);
array1.fill(-1, 1); //* 1. eleman ve sonrasini -1 yap
console.log(array1);

//? ===========================================================
//?  DIZI ERISIM METOTLARI
//? ===========================================================
