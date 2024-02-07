const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

//fetche, her fetchher jeg json
fetch("https://kea-alt-del.dk/t7/api/products?limit=20&category=" + category)
  //når vi har fetched, vil vi gerne have json ud af headers (res = resultat)
  .then((res) => res.json())
  //nu har vi dataen og kan arbejde med den ved at lave en funktion ud af det
  .then(showProducts)
  .then(showHeader);
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
  const template = document.querySelector("#produkttemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector(".produkttitel").textContent = product.productdisplayname;
  copy.querySelector(
    ".produktimg"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".prevprice").textContent = product.price + "DKK";

  copy
    .querySelector(".productlink")
    .setAttribute("href", `produkt.html?id=${product.id}`);

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
//header
function showHeader() {
  document.querySelector(".overskrift").textContent = category;
  document.querySelector(".category").textContent = category;
}
