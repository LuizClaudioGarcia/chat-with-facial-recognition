import Text from "../service/text.js";

class Controller {
  async firstRoute(req, res) {
    const { code, message } = await Text.firstRoute(req.body).then((e) => e);
    return res.status(code).json({ message });
  }
}

module.exports = new Controller();
