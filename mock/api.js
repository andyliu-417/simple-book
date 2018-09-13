var mock = require("mockjs");

getUsers = (req, res) => {
  const data = mock.mock({
    "users|10": [
      {
        "id|+1": 0,
        "name": "@name",
        "age|20-30": 25,
      }
    ]
  });
  res.json(data.users);
};

module.exports = {
  getUsers
};
