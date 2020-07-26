const User = require("../models/User");
const Text = require("../models/Text");

module.exports = {
  async store(req, res) {
    const { title, message } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: "User doesn't exist" });
    }

    const text = await Text.create({
      user: user_id,
      title,
      message,
    });
    console.log(req.body);

    return res.json(text);
  },
};
