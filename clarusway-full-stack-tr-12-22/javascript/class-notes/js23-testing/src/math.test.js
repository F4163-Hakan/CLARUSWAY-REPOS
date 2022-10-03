// ! node module import formatı
const {
  calculateTotal,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  fibonacci,
} = require("./math.js");

// ! es6 module format
// import { calculateTotal,
// celsiusToFahrenheit,
// fahrenheitToCelsius,
// fibonacci } from './math';

describe("calculateTotal", () => {
  // test caselerini oluşturuyoruz
  it("should exist", () => {
    expect(calculateTotal).toBeDefined();
  });

  it("should return a number", () => {
    expect(calculateTotal(100, 0.2)).toBe(120);
  });

  it("should return with default VAT", () => {
    expect(calculateTotal(200)).toBe(236);
  });
});

describe("celsiusToFahrenheit", () => {
  it("should exist", () => {
    expect(celsiusToFahrenheit).toBeDefined();
  });
});

describe("fahrenheitToCelsius", () => {
  it("should exist", () => {
    expect(fahrenheitToCelsius).toBeDefined();
  });
});

describe("fibonacci", () => {
  it("should exist", () => {
    expect(fibonacci).toBeDefined();
  });
});


// //? içindeki isim açıklama için yazılıyor, aslında önemsiz
// //? fakat test edilecek şeyi yazmak best practise kullanım ismini yazmak

// describe("calculateTotal", () => {
//   //* test caselerini burada yazmaya başliyoruz.Günlük konuşma diline yakın
//   //* çıktıda daha okunabilir olması için, yoksa ARMUT yazsak da olur.

//   //? 1- test edilen fonksiyon silinmiş/değişmiş olmasın
//   it('sholud exist', ()=> {
//     expect(calculateTotal).toBeDefined();
//   })

//   //? 2- fonksiyon 100 lirayı %20 faizle 120 olarak döndürmeli
//   it('should return 0.2 tax', () =>{
//     expect(calculateTotal(100, 0.2)).toBe(120)
//   })

//   //? 3- fonksiyon 200 lirayı default faizle (%18) 236 olarak döndürmeli
//   it('should return default tax', () =>{
//     expect(calculateTotal(200)).toBe(236)
//   })

// });
