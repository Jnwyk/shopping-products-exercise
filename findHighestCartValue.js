module.exports = findHighestCartValue = (users, carts, products) => {
  try {
    if (!carts) throw "Could not find any carts";
    let newCarts = carts.map((cart) => {
      let totalValue = countTotalValue(products, cart);
      if (totalValue === 0)
        throw "Could not count total value of cart, cart may be empty";
      const fullName = createFullName(users, cart);
      if (!fullName) throw "Could not create full name of cart owner";
      return { ...cart, totalValue: totalValue, fullName: fullName };
    });
    const resultCart = findMaxCart(newCarts);
    return resultCart;
  } catch (err) {
    console.log("error: ", err);
  }
};

const createFullName = (users, cart) => {
  const user = users.find((user) => user.id === cart.userId);
  return user.name.firstname + " " + user.name.lastname;
};

const countTotalValue = (products, cart) => {
  return cart.products.reduce(
    (sum, current) =>
      sum + products.find((product) => product.id === current.productId).price,
    0
  );
};

const findMaxCart = (carts) => {
  return carts.reduce((max, cart) =>
    max.totalValue > cart.totalValue ? max : cart
  );
};
