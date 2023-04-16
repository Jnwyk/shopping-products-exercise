const fetchData = require("./fetchData.js");
const createDataStructure = require("./createDataStructure.js");
const findHighestCartValue = require("./findHighestCartValue.js");
const findFurthestUsers = require("./findFurthestUsers.js");

async function main() {
  const users = await fetchData("https://fakestoreapi.com/users");
  const carts = await fetchData(
    "https://fakestoreapi.com/carts/?startdate=2000-01-01&enddate=2023-04-07"
  );
  const products = await fetchData("https://fakestoreapi.com/products");

  displayResults(
    createDataStructure(products),
    findHighestCartValue(users, carts, products),
    findFurthestUsers(users)
  );
}

const displayResults = (result1, result2, result3) => {
  console.log("-----------------------");
  console.log("Product categories and their accumulated values: ", result1);
  console.log("-----------------------");
  console.log("Cart with the highest value: ", result2.id);
  console.log("Total value of cart: ", result2.totalValue);
  console.log("Name of cart owner: ", result2.fullName);
  console.log("-----------------------");
  console.log(
    `Futherest living users: \nUser 1: ${result3.user.id} \nUser 2: ${result3.user2.id} \nDistance: ${result3.distance}`
  );
  console.log("-----------------------");
};

main();
