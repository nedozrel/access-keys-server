const {Router} = require('express');
const indexController = require('../controllers/IndexController');

const indexRouter = new Router();

indexRouter.get('', indexController.getKeys);

module.exports = indexRouter;
