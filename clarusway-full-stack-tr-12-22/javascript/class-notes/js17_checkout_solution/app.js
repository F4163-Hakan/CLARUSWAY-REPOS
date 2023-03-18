// Vergi oranı ve kargo ücreti gibi sabit değişkenlerin tanımlanması
const taxRate = 0.18;
const shippingPrice = 15;
const shippingFreePrice = 300;

// Sayfa yüklendiğinde sepet fiyatının hesaplanması ve yerel depolama ve oturum depolama öğelerine atama yapılması
window.addEventListener("load", () => {
  calculateCartPrice();
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);

  //localstorageda kaydedeceğimiz değişkenlerin hepsi number olduğundan jsonparse ve jsonstringfy yapmamıza gerek kalmadı.

  //******  set items to sessionStorage
  //  sessionStorage.setItem("taxRate", taxRate);
  //  sessionStorage.setItem("shippingPrice", shippingPrice);
  //  sessionStorage.setItem("shippingFreePrice", shippingFreePrice)

  //!   Bu kod bloğu, ürün vergi oranını, nakliye ücretini ve ücretsiz nakliye tutarını tutmak için sabitler oluşturur. Ardından window nesnesi üzerinde load olayını dinler ve sayfa yüklendiğinde calculateCartPrice() fonksiyonunu çağırır.
  //! localStorage kullanarak sabit değerleri yerel depolamaya kaydederiz, böylece kullanıcının sayfayı yeniden yüklediğinde veya sayfayı kapatıp açtığında bu değerler kaybolmaz. İstenirse, sessionStorage da kullanılabilir.
  //! Örneğin, localStorage.getItem("taxRate") kullanarak kodun başka yerlerinde sabitlere erişebiliriz.
});



const productsDiv = document.querySelector(".products");

// Ürünlerin listelendiği bölümde oluşan tıklama olayları için bir dinleyici eklenmesi

//! Bu kod bloğu, ürünlerin miktarını, fiyatını ve toplam fiyatını hesaplamak için ürünlerin etrafındaki artı ve eksi düğmelerini dinleyen bir click olayı dinleyicisi ekler.

productsDiv.addEventListener("click", (event) => {
  // Eğer tıklanan element eksi işareti ise
  if (event.target.className == "fa-solid fa-minus") {
    // Eğer ürün miktarı 1'den fazla ise miktarı bir azalt
    //!classname kullanıdığında class'ın tam, uzun ismini yazmamız gerekir.
    //!classlist kullanıldığında ise .contains propertysi kullanılarak class isimlerinden bir tanesinin yazılması yeterlidir.
    if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
      event.target.parentElement.querySelector(".quantity").innerText--;
      calculateProductPrice(event.target);
      calculateCartPrice();
    } else {
      // Eğer ürün miktarı 1 ise silme işlemi yapılabilir
      if (
        confirm(
          `${
            event.target.parentElement.parentElement.querySelector("h2")
              .innerText
          } will be deleted!!!`
        )
      ) {
        //silme işlemi
        //!closest, parentların içerisindeki en yakın product classına sahip öğeyi bul demektir. parent.parent gitmektense bu daha kestirme bir yol
        event.target.closest(".product").remove();
        calculateCartPrice();
      }
    }
  }
  // Eğer tıklanan element artı işareti ise miktar bir arttır
  else if (event.target.classList.contains("fa-plus")) {
    event.target.previousElementSibling.innerText++;
    calculateProductPrice(event.target);
    calculateCartPrice();
  }
  // Eğer tıklanan element "Ürünü kaldır" butonu ise, ürünü sepetten kaldır
  else if (event.target.className == "remove-product") {
    event.target.parentElement.parentElement.parentElement.remove();
    calculateCartPrice();
  } else {
    // Diğer durumlarda işlem yapılmaz
  }
});

//! Bu kod bloğunda, ürünlerin artırılması, azaltılması veya silinmesi için gerekli olay dinleyicileri (event listener) tanımlanmaktadır. productsDiv değişkeni, HTML içindeki .products sınıfına sahip div elemanını seçmek için kullanılır. Bu div içinde yer alan artırma, azaltma ve silme butonlarına tıklama olayları (click) için bir event listener eklenir. event.target özelliği, hangi butona tıklandığını belirler.

//! Eğer tıklanan butonun sınıfı fa-solid fa-minus ise, o ürünün adedini azaltmak için calculateProductPrice ve calculateCartPrice fonksiyonları çağrılır. Eğer adet 1'den büyükse, adeti azaltılır ve toplam ürün fiyatı tekrar hesaplanır. Eğer adet 1'e eşit ise, kullanıcıdan ürünü silmek isteyip istemediğini onaylaması istenir. Eğer onaylanırsa, ürün silinir ve toplam ürün fiyatı tekrar hesaplanır.

//! Eğer tıklanan butonun sınıfı remove-product ise, o ürün silinir ve toplam ürün fiyatı tekrar hesaplanır.

//! Son olarak, eğer tıklanan butonun sınıfı yukarıdakilerden hiçbirine uymuyorsa, console.log("other element is clicked!") kod bloğu çalıştırılır

// Ürün fiyatlarını hesaplamak için bir fonksiyon
const calculateProductPrice = (btn) => {
  const productInfoDiv = btn.parentElement.parentElement;
  const price = productInfoDiv.querySelector(".product-price strong").innerText;
  const quantity = productInfoDiv.querySelector(".quantity").innerText;
  const productTotalDiv = productInfoDiv.querySelector(".product-line-price");
  productTotalDiv.innerText = (price * quantity).toFixed(2);
};
//! calculateProductPrice adında bir fonksiyon tanımlanıyor. Bu fonksiyon, ürünün miktarını ve fiyatını alarak, ürünün toplam fiyatını hesaplayıp, bunu ilgili HTML elementinde gösteriyor.

//? calculateProductPrice fonksiyonu, ürünlerin fiyatını ve toplam fiyatını hesaplar. Fonksiyon, artırma ve azaltma butonlarına tıklama işlemleri için çağrılır.

//? Fonksiyon, butona tıklanan ürün hakkındaki bilgileri almak için parametre olarak tıklanan butonu alır. Butondan yola çıkarak, ürünün fiyatını ve miktarını alır ve bu değerleri çarparak toplam fiyatı hesaplar. Son olarak, toplam fiyatı, ilgili HTML elementinde görüntülemek için gerekli yerde günceller.

//! btn parametresi, fonksiyonun tetiklendiği butonun bilgilerini içerir.

//! price değişkeni, ürünün bir adet fiyatını içeren HTML elemanından alınır.

//! quantity değişkeni, ürün miktarını gösteren HTML elemanından alınır.

//! productTotalDiv değişkeni, toplam fiyatın gösterildiği HTML elemanını seçer.

//! productTotalDiv'deki innerText özelliği, ürünün toplam fiyatını hesaplayıp, belirtilen formatlama ile string olarak atar.

// Sepet fiyatını hesaplamak için bir fonksiyon
const calculateCartPrice = () => {
  const productsTotalPricesDivs = document.querySelectorAll(
    ".product-line-price"
  );

  //! calculateCartPrice adında bir fonksiyon tanımlanıyor. Bu fonksiyon, sepet sayfasının altındaki toplam fiyat bilgilerini hesaplayıp gösterir.
  //! productsTotalPricesDivs değişkeni, her ürün için gösterilen toplam fiyatları gösteren HTML elementlerini seçer.

  //?   calculateCartPrice fonksiyonu, sepetin toplam fiyatını hesaplar ve HTML'de uygun yerlere gösterir. Fonksiyon, artırma veya azaltma butonlarına tıklandığında, sepete ürün eklenip çıkarıldığında veya sepet fiyatlandırması ile ilgili herhangi bir değişiklik olduğunda çağrılır.

  //! Fonksiyon, ürünlerin toplam fiyatını almak için .product-line-price sınıfını taşıyan tüm HTML öğelerini seçer. Bu fiyatlar toplanarak toplam sipariş tutarı elde edilir.

  //! Fonksiyon ayrıca, vergi oranını localStorage'dan alarak toplam sipariş tutarı üzerinden vergi ücretini hesaplar.

  //!Ayrıca, toplam sipariş tutarına göre, ücretsiz kargo eşiğine ulaşılmadıysa veya sepet boş değilse kargo ücreti hesaplanır.

  //! Son olarak, fonksiyon, hesaplanan toplam tutarları HTML'de ilgili alanlarda gösterir.

  //? Fonksiyon, her bir ürünün toplam fiyatını hesaplamak için öncelikle tüm ürünlerin toplam fiyatlarını içeren bir NodeList'i seçer. Daha sonra, reduce() yöntemi kullanarak, tüm ürünlerin toplam fiyatını hesaplar.

  //? Daha sonra, subtotal kullanılarak vergi fiyatı ve nakliye fiyatı hesaplanır. Vergi oranı, taxRate sabitinden alınır. Nakliye ücreti, toplam fiyatın belirli bir eşiği geçip geçmediğine bağlı olarak belirlenir. Eşik, shippingFreePrice sabitinden alınır ve varsayılan olarak 300 olarak ayarlanır. Eğer toplam fiyat eşik değerinden düşükse, nakliye ücreti `shipping

  // Ürün fiyatlarının toplamının hesaplanması
  //productsTotalPricesDivs nodelist döndürür(arrayimsi yapı) bunun içerisinde default olarak foreach metodu bulunur. subtotal işlemi foreach ile yapılabilecekken spread metodu(Array.from ile de olabilir) ile arraye çevirerek reduce metodunu kullandık.
  const subtotal = [...productsTotalPricesDivs].reduce(
    (acc, price) => acc + Number(price.innerText),
    0
  );

  // Vergi fiyatının hesaplanması
  const taxPrice = subtotal * localStorage.getItem("taxRate");

  // Kargo fiyatının hesaplanması
  const shippingPrice = parseFloat(
    subtotal > 0 && subtotal < localStorage.getItem("shippingFreePrice")
      ? localStorage.getItem("shippingPrice")
      : 0
  );

  //aslında hepsini lastElementChild ile de yapabilecekken DOM traversing seçicilerini görebilmek amacıyla farklı şekillerde yazdık.

  console.log(shippingPrice);

  document.querySelector("#cart-subtotal").lastElementChild.innerText =
    subtotal.toFixed(2);
  document.querySelector("#cart-tax p:nth-child(2)").innerText =
    taxPrice.toFixed(2);
  document.querySelector("#cart-shipping").children[1].innerText =
    shippingPrice.toFixed(2);
  document.querySelector("#cart-total").lastElementChild.innerText = (
    subtotal +
    taxPrice +
    shippingPrice
  ).toFixed(2);
};