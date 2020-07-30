const User = require("../models/User");
const Text = require("../models/Text");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const texts = await Text.paginate({}, { page, limit: 1000 });

    return res.json(texts);
  },

  async show(req, res) {
    const text = await Text.findById(req.params.id);

    return res.json(text);
  },

  async store(req, res) {
    const { title, body, rating } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: "User doesn't exist" });
    }

    const text = await Text.create({
      user: user_id,
      title,
      body,
      rating,
    });
    console.log(req.body);

    return res.json(text);
  },

  async updateOne(req, res) {
    const text = await Text.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
    });

    return res.json(text);
  },

  async destroy(req, res) {
    const text = await Text.findByIdAndRemove(req.params.id, {
      useFindAndModify: false,
    });

    return res.send();
  },
};
