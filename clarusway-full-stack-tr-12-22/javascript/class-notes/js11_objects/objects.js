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
// console.log(arabalar.lpg); //? .notation
// console.log("MODEL:", arabalar["model"]); //? Square bracket notation

// //? Square bracket yonteminin en buyuk avantaji key degerini
// //? degisken olarak kullanabilmemizdir.
// const key = "mark";
// console.log(arabalar[key]);

// arabalar.motor = "1.6";
// console.log(arabalar);

// //* ---------------------------------------------------------
// //* 2- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
// //* ---------------------------------------------------------

// //? Object Constructure
// function Personel(id, ad, maas) {
//   this.id = id;
//   this.ad = ad;
//   this.maas = maas;
//   // console.log(this); //! Personel objesine baglanmistir (binded)
// }

// const kisi1 = new Personel("1234567890", "Mustafa", 15000);
// const kisi2 = new Personel("177567890", "Canan", 25000);
// // console.log(kisi1);
// console.log(kisi1.ad);
// console.log(kisi2.maas);
// console.log(kisi2["id"]);

// //? Global alanda window objesini gosterir.
// console.log(this);
// window.alert("Merhaba");

//* ---------------------------------------------------------
//* 3- Object literal (En cok tercih edilen yontem)
//* ---------------------------------------------------------

const worker = {
  name: "Can",
  surname: "Canan",
  age: 33,
  job: "developer",
  languages: ["C++", "Java", "Javacript", "Pyhton", "Go"],
  salary: "140000",
};
console.log(worker);

console.log("JOB:", worker.job);
console.log("Lang:", worker["languages"]);

console.log(worker.languages[2]);

worker["languages"].forEach((l) => console.log(l));

worker.dob = "1990";
worker.email = "can@gmail.com";
console.log(worker);

// worker["salary"] = worker["salary"] * 1.1;
worker["salary"] *= 1.1;
console.log(worker);

//* Object Copy
const person = worker; //! Shallow (Sig - Sığ) Copying
console.log("PERSON:", person);

//! Object.create(), Object.assign(), spread (...), concat() , slice() -> Shallow Copying

person.dob = 2000;
console.log("PERSON:", person);

//! Deep Copy
let deepCopyOfWorker = JSON.parse(JSON.stringify(worker));
// console.log(JSON.stringify(worker));

deepCopyOfWorker.dob = "2022";
console.log("DEEP:", deepCopyOfWorker);

//* ======================================================
//*              Object Metotlari
//* ======================================================

const personal = {
  name: "Can",
  surname: "Canan",
  dob: "1990",
  job: "developer",
  salary: "140000",
  drivingLicense: true,
  calculateAge: function () {
    return new Date().getFullYear() - this.dob;
  },
  summary: function () {
    console.log(this); //? window
    return `${this.name} is ${this.calculateAge()} years old`;
  },
  // summary: () => {
  //   console.log(this); //? window
  //   return `${this.name} is ${this.calculateAge()} years old`;
  // },
};

//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.

console.log("Age:", personal.calculateAge());
console.log("SUMMARY:", personal.summary());

// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================

//? nested
const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};

console.log(people); //? {person1: {…}, person2: {…}}
console.log("Salary of P2:", people.person2.salary);

//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.
console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

//! FOR - IN
//* for (key in object) {
//*   // code block to be executed
//* }

for (let person in people) {
  console.log(person);
  console.log(people[person]);
}

//! FOR - OF
//* for (x of iterable) {
//*   code block to be executed
//* }
console.log("****************");
for (let key of Object.keys(people)) {
  console.log(key);
}

console.log("****************");
//? people objesindeki tum salary 'leri yazdir
for (let v of Object.values(people)) {
  console.log(v.salary);
  // console.log(v["salary"]);
}

//? people objesindeki tum salary 'leri yazdir
for (let [k, v] of Object.entries(people)) {
  console.log(`${k} - ${v.salary}`);
}

//! ARRAY METOTLARI ILE
console.log("********");
Object.keys(people).forEach((p) => console.log(p));
console.log("********");
Object.values(people).forEach((p) => console.log(p.surname));

//? job = developer olanlarin dob degelerini yazdiriniz.
console.log("*** DOB ****");
Object.values(people)
  .filter((p) => p.job === "developer")
  .forEach((p) => console.log(p.dob));

//********************************************************
//* JSON => Javascript Object Notation
//********************************************************
const team = [
  { name: "Josh", surname: "Adams", job: "developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
]; //* JSON

console.log(team);
console.log(team[2]);

//* Ornek1: team dizisindeki job'lari tek tek yazdiriniz.
team.forEach((person) => console.log(person.job));

//* Ornek2: age'leri bir artirarak yeni bir diziye saklayiniz.
const ages = team.map((p) => p.age + 1);

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu fullName key'i olarak saklayan, ayni zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.

// const teamFullName = team.map((p) => ({
//   fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
//   age: p.age + 5,
// }));

//?Alternativly
const teamFullName = team.map((p) => {
  return {
    fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
    age: p.age + 5,
  };
});

console.log(teamFullName);

//* Ornek4: Yasi(age) 22 'den kucuk esit olan kisilerin adlarini (name) listeyiniz.

team.filter((p) => p.age <= 22).forEach((p) => console.log(p.name));

//* Ornek5: 22 yasindan kucuk ve esit olanlarin isimlerini diziye saklayiniz.

const teamUnder22 = team.filter((x) => x.age <= 22).map((p) => p.name);
console.log(teamUnder22);

//* Ornek6: ortalama yasi hesaplayiniz.
const avgAges =
  team.reduce((sum, person) => (sum += person.age), 0) / team.length;
console.log(avgAges);



// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

// //?-------------- ÖRNEK -------------------
// //? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim

// const bigSalaries = salaries.filter((s) => s > 10000);
// console.log(bigSalaries);

// const range = salaries.filter((s) => s >= 6000 && s <= 10000);
// console.log(range);

// //?-------------- ÖRNEK -------------------
// //? Maasi 9000'den az olanlara %10 zam yaparak bu degerleri
// //? yeni diziye saklayalim.

// const zamliMaas = salaries
//   .filter((s) => s <= 9000)
//   .map((s) => Math.trunc(s * 1.1));

// console.log(zamliMaas);
// console.log(salaries);

// salaries
//   .filter((s) => s < 9000)
//   .map((s) => Math.trunc(s * 1.1))
//   .forEach((s) => console.log(s));

// //? maasların toplamını bul

// // const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

// const sumOfSalaries = salaries.reduce((acc, val) => acc + val);
// console.log(sumOfSalaries);

// //? Ornek: Bir Firma, 9000 TL den az olan maaşlara %10 zam yapmak istiyor
// //? ve zam yapılan bu kişilere toplam kaç TL ödeneceğini bilmek istiyor.
// //? İlgili programı yazınız.

// const zamliToplam = salaries
//   .filter((s) => s < 9000)
//   .map((s) => Math.trunc(s * 1.1))
//   .reduce((acc, val) => acc + val, 0);

// console.log(zamliToplam);

// //* ===================================================
// //*                 (OBJECTS)
// //* ===================================================

// //? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
// //? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
// //? verilerimiz icin  Object'leri kullanabiliriz.

// //? Object'lerde Key-value (property-value) yapisi kullanilir.
// //? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

// console.log("******* Objects *********");

// //! 3 farkli yontem ile Object olusturulabilir

// //* ---------------------------------------------------------
// //* 1- Object() class'ından new Operatörü ile
// //* ---------------------------------------------------------

// //!Read
// // console.log(arabalar.lpg); //? .notation
// // console.log("MODEL:", arabalar["model"]); //? Square bracket notation

// // //? Square bracket yonteminin en buyuk avantaji key degerini
// // //? degisken olarak kullanabilmemizdir.

// const arabalar = new Object();
// arabalar.marka = "BMV";
// arabalar.model = "2021";
// arabalar.motor = "1.3";
// console.log(arabalar);

// console.log(arabalar.model);
// console.log(arabalar["marka"]);

// const key = "marka";
// console.log(arabalar[key]);

// arabalar.motor = "1.6";
// console.log(arabalar);
// arabalar.model = "2022";
// console.log(arabalar);

// //* ---------------------------------------------------------
// //* 2- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
// //* ---------------------------------------------------------

// function Personal(id, ad, maas) {
//   this.id = id;
//   this.ad = ad;
//   this.maas = maas;
// }

// const kisi1 = new Personal("12345678901", "hakan", 30000);
// const kisi2 = new Personal("213655472565", "osman", 25000);
// console.log(kisi1.maas);
// console.log(kisi2.ad);

// // //? Global alanda window objesini gosterir.
// // console.log(this);
// // window.alert("merhaba");

// //* ---------------------------------------------------------
// //* 3- Object literal (En cok tercih edilen yontem)
// //* ---------------------------------------------------------

// const worker = {
//   name: "Hakan",
//   surName: "Bilgi",
//   dop: 1976,
//   job: "software",
//   languages: ["C++", "Java", "Javacript", "Pyhton", "Go"],
//   salary: "140000",
// };

// console.log(worker);
// console.log(worker.job);
// console.log(worker.salary);

// console.log(worker.languages);
// console.log(worker["languages"]);
// console.log(worker.languages[2]);



// worker["languages"].forEach((s)=> console.log(s));

// // const worker ={
// //     name : "Sezer",
// //     surname:"Ökmen",
// //     age:30,
// //     job:"mechanical engineer",
// //     languages:["HTML", "CSS", "JAVASCRİPT", "REACT"],
// //     salary:140000
// // };
// // console.log(worker);
// // console.log(worker.name);           // .notation
// // console.log(worker["surname"]);     // square bracket
// // console.log(worker["languages"].forEach((l) => console.log(l)));    // languages leri alt alta yazdırmak istiyorsak

// // const worker ={
// //     name : "Sezer",
// //     surname:"Ökmen",
// //     age:30,
// //     job:"mechanical engineer",
// //     languages:["HTML", "CSS", "JAVASCRİPT", "REACT"],
// //     salary:140000
// // };
// // console.log(worker);
// // console.log(worker.name);           // .notation
// // console.log(worker["surname"]);     // square bracket
// // worker["languages"].forEach((l) => console.log(l));    // languages leri alt alta yazdırmak istiyorsak
// // worker.dateOfBirthday = 1992;           // objeye yeni bir key-value ekledik
// // console.log(worker.languages[2]);       // languages dizisindeki 2. index numaralı elemanı yazdırmak istiyorsak

// worker.gender = "male";
// console.log(worker);
//  console.log(worker.languages[3]);
//  worker.languages[2] = "Django";
//  console.log(worker);
// //  worker.salary = worker.salary * 1.1;
//  worker.salary *= 1.1; //! kısa yazılış yöntemi
//  console.log(worker);


// //* Object Copy
// const person = worker; //! Shallow (Sig - Sığ) Copying
// console.log("PERSON:", person);

// //! Object.create(), Object.assign(), spread (...), concat() , slice() -> Shallow Copying

// person.dob = 2000;
// console.log("PERSON:", person);

// //! Deep Copy
// let deepCopyOfWorker = JSON.parse(JSON.stringify(worker));
// console.log(JSON.stringify(worker));

// deepCopyOfWorker.dob = "2022";
// console.log("DEEP:", deepCopyOfWorker);


// //  const person = worker;
//  person.dop = "2000";
//  console.log("Person:", person);
//  console.log("Worker:", worker);



//* ======================================================
//*              Object Metotlari
//* ======================================================

// const personal = {
//   name: "Can",
//   surname: "Canan",
//   dob: "1990",
//   job: "developer",
//   salary: "140000",
//   drivingLicense: true,
//   calculateAge: function () {
//     return new Date().getFullYear() - this.dob;
//   },
//   summary: function () {
//     console.log(this); //? window
//     return `${this.name} is ${this.calculateAge()} years old`;
//   },
  // summary: () => {
  //   console.log(this); //? window
  //   return `${this.name} is ${this.calculateAge()} years old`;
  // },
// };

//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.

// console.log("Age:", personal.calculateAge());
// console.log("SUMMARY:", personal.summary());



//  const personal = {
//   name: "Can",
//   surname: "Canan",
//   dob: "1990",
//   job: "developer",
//   salary: "140000",
//   drivingLicense: true,
//   age: function(){
//         return new Date().getFullYear()- this.dob;

//   },
//   summary: function(){
//     return `${this.name} is ${this.age()} years old.`
//   }
//  };
//  console.log("DOP:", personal.age());
//  console.log(personal.summary());



// *                  OBJECT ITERATION
// * ======================================================

//? nested
const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  }
}

// for(let x in people){
//     console.log(people);
//     console.log(people[x]);

// }


// Object.values(people).forEach((p)=> console.log(p.surname));
Object.values(people).filter((p)=> p.job === "developer").forEach((p)=> console.log(p.salary));
