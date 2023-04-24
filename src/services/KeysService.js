const keyModel = require('../models/Key');

class KeysService {
  async getKeys() {
    return keyModel.find({});
  }

  async getKey(id) {
    return keyModel.findById(id);
  }

  async createKey(title, expiration) {
    if (!expiration) {
      const currentTime = new Date().getTime();
      const oneDayMs = 24 * 60 * 60 * 1000;
      const expirationTime = currentTime + oneDayMs;
      expiration = new Date(expirationTime);
    }

    return keyModel.create({
      title: title,
      expiration: expiration,
    });
  }

  async updateKey(id, title, expiration) {
    return keyModel.findByIdAndUpdate(id, {
      title: title,
      expiration: expiration,
    });
  }

  async deleteKey(id) {
    return keyModel.findByIdAndDelete(id);
  }
}

module.exports = new KeysService();
