const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".produkttitel").textContent =
    product.productdisplayname;
  document.querySelector(".produktbreadcrumb").textContent =
    product.productdisplayname;
  document.querySelector(".category").textContent = product.category;
  document.querySelector(".prevprice").textContent = product.price + "DKK";
  document.querySelector(
    ".category"
  ).href = `produktliste.html?category=${product.category}`;
  var discountedPrice =
    product.price * ((100 - product.discount) / 100).toFixed(2);
  if (product.discount) {
    //produktet er på tilbud
    document.querySelector("article").classList.add("discount");
    document.querySelector(".currentprice").textContent =
      discountedPrice.toFixed(2) + "DKK";
  }
  if (product.soldout) {
    //produktet er udsolgt
    document.querySelector(".addtobag").textContent = "sold out";
    document.querySelector("article").classList.add("soldout");
  }
  document.querySelector(
    ".produktimg"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
