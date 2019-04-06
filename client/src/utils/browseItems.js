export const sortOptions = [
  { label: "* Sort by", value: "" },
  { label: "Price ascending", value: "ascending" },
  { label: "Price descending", value: "descending" }
];

export const selectOptions = [
  { label: "* Select category", value: "" },
  { label: "Clothes", value: "Clothes" },
  { label: "Electronics", value: "Electronics" },
  { label: "Shoes", value: "Shoes" }
];

export const sort = (sortBy, array) => {
  if (sortBy !== "") {
    if (sortBy === "ascending") {
      array.sort((first, second) => {
        return first.price - second.price;
      });
    }

    if (sortBy === "descending") {
      array.sort((first, second) => {
        return second.price - first.price;
      });
    }
  }
};

export const select = (selectedCategory, items) => {
  let itemsArray;
  if (selectedCategory !== "") {
    itemsArray = items.filter(item => item.category === selectedCategory);
  } else {
    itemsArray = items;
  }
  return itemsArray;
};
