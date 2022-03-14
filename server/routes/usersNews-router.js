const newsRouter = require('express').Router();
const newsActions = require('../controllers/usersNews-controller');

newsRouter.get('/',newsActions.getAllNews)
newsRouter.get('/:id',newsActions.getNewsById)
newsRouter.post('/',newsActions.postNews );
newsRouter.put('/:id',newsActions.putNews );
newsRouter.delete('/:id',newsActions.deleteNews );

module.exports = newsRouter;

