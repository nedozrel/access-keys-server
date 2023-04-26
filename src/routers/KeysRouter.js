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
      .isISO8601()
      .toDate()
      .withMessage('Date should be ISO8601 format'),
    body('expiresInHours')
      .optional()
      .isInt()
      .toInt()
      .withMessage('Expiration time in hours should be an integer'),
  ],
  keysController.createKey,
);

keysRouter.put(
  '/keys/:id',
  [
    body('title')
      .exists()
      .withMessage('Title is required')
      .isString()
      .withMessage('Wrong title'),
    body('expiration')
      .exists()
      .withMessage('Date is required')
      .isISO8601()
      .toDate()
      .withMessage('Date should be ISO8601 format'),
  ],
  keysController.updateKey,
);

keysRouter.delete(
  '/keys/:id',
  keysController.deleteKey,
);

module.exports = keysRouter;
