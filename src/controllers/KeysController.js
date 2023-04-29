const {validationResult} = require('express-validator');
const keysService = require('../services/KeysService');
const HTTP_STATUSES = require('../utils/httpStatuses');

class KeysController {
  async getKeys(req, res) {
    try {
      const keys = await keysService.getKeys();
      return res.json(keys);
    } catch (e) {
      console.error(e);
      return res.status(HTTP_STATUSES.INTERNAL_SERVER_ERROR).json(e);
    }
  }

  async getKey(req, res) {
    try {
      const {id} = req.params;
      const keys = await keysService.getKey(id);
      return res.json(keys);
    } catch (e) {
      console.error(e);
      return res.status(HTTP_STATUSES.INTERNAL_SERVER_ERROR).json(e);
    }
  }

  async createKey(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({
          errors: errors.array(),
        });
      }
      const {title, expiration, expiresInHours} = req.body;
      const key = await keysService.createKey(title, expiration, expiresInHours);
      return res.json(key);
    } catch (e) {
      console.error(e);
      return res.status(HTTP_STATUSES.INTERNAL_SERVER_ERROR).json(e);
    }
  }

  async updateKey(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({
          errors: errors.array(),
        });
      }
      const {title, expiration} = req.body;
      const {id} = req.params;
      const key = await keysService.updateKey(id, title, expiration);
      return res.json(key);
    } catch (e) {
      console.error(e);
      return res.status(HTTP_STATUSES.INTERNAL_SERVER_ERROR).json(e);
    }
  }

  async deleteKey(req, res) {
    try {
      const {id} = req.params;
      const key = keysService.deleteKey(id);
      return res.json({key});
    } catch (e) {
      console.error(e);
      return res.status(500).json(e);
    }
  }
}

module.exports = new KeysController();
