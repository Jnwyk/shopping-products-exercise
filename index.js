const fetchData = require("../fetchData.js");
const createDataStructure = require("../createDataStructure.js");
const findHighestCartValue = require("../findHighestCartValue.js");
const findFurthestUsers = require("../findFurthestUsers.js");

async function main() {
  const users = await fetchData("https://fakestoreapi.com/users");
  const carts = await fetchData(
    "https://fakestoreapi.com/carts/?startdate=2000-01-01&enddate=2023-04-07"
  );
  const products = await fetchData("https://fakestoreapi.com/products");
}

main();
