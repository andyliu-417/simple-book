const users = [
  {
    key: "1",
    name: "John Brown",
    age: 25,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 25,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 25,
    address: "Sidney No. 1 Lake Park"
  }
];
var mock = require("mockjs");

getUsers = (req, res) => {
  users = mock.mock({
    "array|1-10": [
      {
        id: mock.mock("id|+1:0"),
        name: mock.mock("@name")
      }
    ]
  });
  res.json(users);
};

module.exports = {
  getUsers
};
