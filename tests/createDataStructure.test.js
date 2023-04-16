const createDataStructure = require("../createDataStructure.js");
const data = require("./dummyData.json");

test("finds proper result", () => {
  expect(createDataStructure(data.products)).toEqual([
    { category: "category1", price: 9.04 },
    { category: "category2", price: 1012.4 },
  ]);
});

test("wrong price result", () => {
  expect(createDataStructure(data.products)).not.toBe([
    { category: "category1", price: 3.5 },
    { category: "category2", price: 1012.4 },
  ]);
  expect(createDataStructure(data.products)).not.toBe([
    { category: "category1", price: 9.05 },
    { category: "category2", price: 1000 },
  ]);
  expect(createDataStructure(data.products)).not.toBe([
    { category: "category1", price: 9.05 },
    { category: "category2", price: undefined },
  ]);
  expect(createDataStructure(data.products)).not.toBe([
    { category: "category1", price: undefined },
    { category: "category2", price: 1012.4 },
  ]);
  expect(createDataStructure(data.products)).not.toBe([
    { category: "category1", price: 9.05 },
    { category: "category2", price: 1000 },
  ]);
});

test("wrong cateogries", () => {
  expect(createDataStructure(data.products)).not.toBe([
    { category: "category1", price: 9.04 },
  ]);
  expect(createDataStructure(data.products)).not.toBe([
    { category: "category2", price: 1012.4 },
  ]);
  expect(createDataStructure(data.products)).not.toBe([
    { category: undefined, price: 9.04 },
    { category: "category2", price: 1012.4 },
  ]);
  expect(createDataStructure(data.products)).not.toBe([
    { category: "category1", price: 9.04 },
    { category: undefined, price: 1012.4 },
  ]);
});
