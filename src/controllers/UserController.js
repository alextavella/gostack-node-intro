const { Users } = require('../database');

module.exports = {

  list(req, res) {
    return res.status(200).json(Users);
  },

  get(req, res) {
    return res.status(200).json(req.user);
  },

  create(req, res) {
    const { name } = req.body;

    Users.push(name);

    return res.status(201).json(name);
  },

  edit(req, res) {
    const { index } = req.params;
    const { name } = req.body;

    Users[index] = name;

    return res.status(201).json(Users[index]);
  },

  remove(req, res) {
    const { index } = req.params;

    Users.splice(index, 1);

    return res.status(200).send();
  },
};
