const findFutherestUsers = require("../findFurthestUsers.js");
const data = require("./dummyData.json");

test("finds proper result", () => {
  expect(findFutherestUsers(data.users)).toEqual({
    user: data.users[2],
    user2: data.users[1],
    distance: 12379.525469619508,
  });
});

test("wrong user", () => {
  expect(findFutherestUsers(data.users)).not.toBe({
    user: undefined,
    user2: data.users[1],
    distance: 12379.525469619508,
  });
  expect(findFutherestUsers(data.users)).not.toBe({
    user: data.users[2],
    user2: undefined,
    distance: 12379.525469619508,
  });
  expect(findFutherestUsers(data.users)).not.toBe({
    user: undefined,
    user2: undefined,
    distance: 12379.525469619508,
  });
  expect(findFutherestUsers(data.users)).not.toBe({
    user: data.users[2],
    user2: data.users[0],
    distance: 12379.525469619508,
  });
  expect(findFutherestUsers(data.users)).not.toBe({
    user: data.users[0],
    user2: data.users[1],
    distance: 12379.525469619508,
  });
});

test("wrong distance", () => {
  expect(findFutherestUsers(data.users)).not.toBe({
    user: data.users[2],
    user2: data.users[1],
    distance: NaN,
  });
  expect(findFutherestUsers(data.users)).not.toBe({
    user: data.users[2],
    user2: data.users[1],
    distance: undefined,
  });
  expect(findFutherestUsers(data.users)).not.toBe({
    user: data.users[2],
    user2: data.users[1],
    distance: 1,
  });
  expect(findFutherestUsers(data.users)).not.toBe({
    user: data.users[2],
    user2: data.users[1],
    distance: -1,
  });
});
