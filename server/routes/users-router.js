const usersRouter = require('express').Router();
const usersActions = require('../controllers/users-controller');

usersRouter.post('/login', usersActions.login);
usersRouter.post('/register', usersActions.register);
usersRouter.get('/', usersActions.getAllUsers);
usersRouter.put('/:id',usersActions.putUser);

module.exports = usersRouter;