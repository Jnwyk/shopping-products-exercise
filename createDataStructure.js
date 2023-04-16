module.exports = createDataStructure = (products) => {
  let categories = [];
  products.forEach((product) => {
    if (!findCategory(categories, product)) {
      categories = [
        ...categories,
        { category: product.category, price: product.price },
      ];
    } else {
      findCategory(categories, product).price += product.price;
    }
  });
  return categories;
};

const findCategory = (categories, product) => {
  return categories.find((category) => category.category === product.category);
};
