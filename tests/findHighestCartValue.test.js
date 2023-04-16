const findHighestCartValue = require("../findHighestCartValue.js");
const data = require("./dummyData.json");

test("finds proper result", () => {
  expect(findHighestCartValue(data.users, data.carts, data.products)).toEqual({
    ...data.carts[0],
    totalValue: 1001,
    fullName: "john smith",
  });
});

test("wrong result", () => {
  expect(findHighestCartValue(data.users, data.carts, data.products)).not.toBe({
    ...data.carts[1],
    totalValue: 17.04,
    fullName: "jan nowak",
  });
});

test("wrong wrong total value", () => {
  expect(findHighestCartValue(data.users, data.carts, data.products)).not.toBe({
    ...data.carts[0],
    totalValue: 0,
    fullName: "john smith",
  });
  expect(findHighestCartValue(data.users, data.carts, data.products)).not.toBe({
    ...data.carts[0],
    totalValue: 123,
    fullName: "john smith",
  });
  expect(findHighestCartValue(data.users, data.carts, data.products)).not.toBe({
    ...data.carts[0],
    totalValue: undefined,
    fullName: "john smith",
  });
});

test("wrong full name", () => {
  expect(findHighestCartValue(data.users, data.carts, data.products)).not.toBe({
    ...data.carts[0],
    totalValue: 1001,
    fullName: undefined,
  });
  expect(findHighestCartValue(data.users, data.carts, data.products)).not.toBe({
    ...data.carts[0],
    totalValue: 1001,
    fullName: "jan nowak",
  });
  expect(findHighestCartValue(data.users, data.carts, data.products)).not.toBe({
    ...data.carts[0],
    totalValue: 1001,
    fullName: "",
  });
});
