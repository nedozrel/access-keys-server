const path = require('path');
const HTTP_STATUSES = require('../utils/httpStatuses');

class IndexController {
  async getKeys(req, res) {
    try {
      console.log(__dirname);
      return res.sendFile(path.join(appRoot, 'access-keys-react-client/build', 'index.html'));
    } catch (e) {
      console.error(e);
      return res.status(HTTP_STATUSES.INTERNAL_SERVER_ERROR).json(e);
    }
  }
}

module.exports = new IndexController();