fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  //looper
  cats.forEach(showCategory);
}
function showCategory(cat) {
  console.log(cat);
  //fang template
  const template = document.querySelector("template").content;
  //lav en kopi/cloner
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("a").textContent = cat.category;
  copy.querySelector("a").href = `produktliste.html?category=${cat.category}`;
  //append, hvor skal den ligge i?
  const parent = document.querySelector(".categories");
  parent.appendChild(copy);
  //kan også skrives som
  //   document.querySelector("den du vil ligge det i").appendChild(copy)
}
