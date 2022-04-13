const template = require("../utils/renderEjs");

class ViewsController {
  static async home(req, res) {
    template(res, "index", {
      props: {
        title: "index",
      },
    });
  }
  static async result(req, res) {
    template(res, "pages/result", {
      props: {
        title: "result",
      },
    });
  }
}
module.exports = ViewsController;
