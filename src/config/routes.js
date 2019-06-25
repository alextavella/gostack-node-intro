const Router = require('express').Router();

const UserController = require('../controllers/UserController');
const { get, create } = require('../validations/UserValidations');

Router
  .route('/users')
  .get(UserController.list)
  .post(create, UserController.create);

Router
  .route('/users/:index')
  .get(get, UserController.get)
  .put(get, create, UserController.edit)
  .delete(create, UserController.remove);

module.exports = Router;
