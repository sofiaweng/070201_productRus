fetch("https://kea-alt-del.dk/t7/api/products/1525")
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
