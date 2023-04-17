module.exports = createDataStructure = (products) => {
  let categories = [];
  try {
    if (!products) throw "Could not find any products";
    products.forEach((product) => {
      let selectedCategory = findCategory(categories, product);
      if (!selectedCategory) {
        categories = [
          ...categories,
          { category: product.category, price: product.price },
        ];
      } else {
        selectedCategory.price += product.price;
      }
    });
    return categories;
  } catch (err) {
    console.log("error: ", err);
  }
};

const findCategory = (categories, product) => {
  return categories.find((category) => category.category === product.category);
};
