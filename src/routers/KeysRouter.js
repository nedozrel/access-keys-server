const {Router} = require('express');
const {body} = require('express-validator');
const keysController = require('../controllers/KeysController');

const keysRouter = new Router();

keysRouter.get(
  '/keys',
  keysController.getKeys,
);

keysRouter.get(
  '/keys/:id',
  keysController.getKey,
);

keysRouter.post(
  '/keys',
  [
    body('title')
      .optional()
      .isString()
      .withMessage('Wrong title'),
    body('expiration')
      .optional()
      .isDate()
      .toDate()
      .withMessage('Wrong date'),
  ],
  keysController.createKey,
);

keysRouter.put(
  '/keys/:id',
  keysController.updateKey,
);

keysRouter.delete(
  '/keys/:id',
  [
    body('title')
      .optional()
      .isString()
      .withMessage('Wrong title'),
    body('expiration')
      .optional()
      .isDate()
      .toDate()
      .withMessage('Wrong date'),
  ],
  keysController.deleteKey,
);

module.exports = keysRouter;
