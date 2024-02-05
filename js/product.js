const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".produkttitel").textContent =
    product.productdisplayname;
  document.querySelector(
    ".produktimg"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
