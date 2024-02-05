//----------------burgermenu---------------
const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
});
//sikrer at menuknap forsvinder
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
  })
);
const save = document.querySelector(".save");
const heart = document.querySelector(".heart");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenvises");
  save.addEventListener("click", clickSave);
}

function clickSave() {
  console.log("clickSave");
  heart.classList.toggle("activeheart");
}

//fetche, her fetchher jeg json
fetch("https://kea-alt-del.dk/t7/api/products?limit=20")
  //når vi har fetched, vil vi gerne have json ud af headers (res = resultat)
  .then((res) => res.json())
  //nu har vi dataen og kan arbejde med den ved at lave en funktion ud af det
  .then(showProducts);
//det som er i parantes forstås, som function modtager en array af products

function showProducts(products) {
  //looper den igennem og kalder showProduct
  products.forEach(showProduct);
}
//modtager en product(array) ad gangen
function showProduct(product) {
  console.log(product);
  //clone, ændre & appende
  //fang template
  const template = document.querySelector("template").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector(".produkttitel").textContent = product.productdisplayname;
  // copy.querySelector("img").src = product.brandimage;
  copy.querySelector(".prevprice").textContent = product.price + "DKK";
  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldout");
  }
  //prisen på tilbud
  var discountedPrice =
    product.price * ((100 - product.discount) / 100).toFixed(2);
  if (product.discount) {
    //produktet er på tilbud
    copy.querySelector("article").classList.add("discount");
    copy.querySelector(".currentprice").textContent =
      discountedPrice.toFixed(2) + "DKK";
  }
  //append
  const parent = document.querySelector(".produktliste");
  parent.appendChild(copy);
}
