const listItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach((item) => {
  const itemsTitle = item.querySelector(".item h2");
  console.log(`Category: ${itemsTitle.textContent}`);

  const listItemsAnimals = item.querySelectorAll(".item h2 + ul > li");
  console.log(`Elements: ${listItemsAnimals.length}`);
});
