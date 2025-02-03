class Text {
  async firstRoute() {
    return { code: 200, message: "Ok" };
  }
}

module.exports = new Text();
