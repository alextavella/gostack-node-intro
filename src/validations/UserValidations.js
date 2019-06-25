const { Users } = require('../database');

module.exports = {

  get(req, res, next) {
    const user = Users[req.params.index];

    if (!user) {
      return res.status(400).send('User does not exist.');
    }

    req.user = user;

    return next();
  },

  create(req, res, next) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).send('Name is required.');
    }

    return next();
  },
};
