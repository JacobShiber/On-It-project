const newsRouter = require('express').Router();
const newsActions = require('../controllers/usersNews-controller');

newsRouter.get('/',newsActions.getAllNews)
newsRouter.get('/',newsActions.getNewsById)
newsRouter.post('/',newsActions.postNews );
newsRouter.put('/',newsActions.putNews );
newsRouter.delete('/',newsActions.deleteNews );

module.exports = newsRouter;

