
const list = document.querySelectorAll(".item");
console.log(list);
console.log(`Number of categories: ${list.length}`);

 list.forEach((li) => {
  console.log(`Category: ${li.firstElementChild.textContent}`);
  console.log(`Elements: ${li.lastElementChild.children.length}`);
 });
console.log(list.children);