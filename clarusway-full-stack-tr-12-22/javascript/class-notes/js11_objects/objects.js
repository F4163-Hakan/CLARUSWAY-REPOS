// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

const sumOfSalaries = salaries.reduce((acc, val, i) => acc + val, 0);

console.log("SUM:", sumOfSalaries);

//? Ornek: Bir Firma, 9000 TL den az olan maaşlara %10 zam yapmak istiyor
//? ve zam yapılan bu kişilere toplam kaç TL ödeneceğini bilmek istiyor.
//? İlgili programı yazınız.

const sumOfRaisedSalaries = salaries
  .filter((sal) => sal <= 9000)
  .map((sal) => Math.trunc(sal * 1.1))
  .reduce((acc, salary) => acc + salary, 0);

console.log("Sum Of Raised Salaries:", sumOfRaisedSalaries);





//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

//! 3 farkli yontem ile Object olusturulabilir
//* ---------------------------------------------------------
//* 1- Object() class'ından new Operatörü ile
//* ---------------------------------------------------------

const arabalar = new Object();
arabalar.marka = "BMW";
arabalar.motor = "1.3";
arabalar.model = 2022;
arabalar.lpg = true;
console.log(arabalar);

//!Read
console.log(arabalar.lpg); //? .notation
console.log("MODEL:", arabalar["model"]); //? Square bracket notation

//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.
const key = "marka";
console.log(arabalar[key]);
