require("dotenv").config();

const User = require("../models/User");
const Text = require("../models/Text");

const deletePass = process.env.DELETEPASSWORD;

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const texts = await Text.paginate(
      {},
      { page, limit: 1000, sort: { createdAt: -1 } }
    );

    return res.json(texts);
  },

  async show(req, res) {
    const text = await Text.findById(req.params.id);

    return res.json(text);
  },

  async store(req, res) {
    const { title, body /*, rating*/ } = req.body;

    /* Just in case we eventually have an user api
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
    const  return res.status(400).json({ error: "User doesn't exist" });
    }
    */

    const text = await Text.create({
      //  user: user_id,
      title,
      body,
      //rating,
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
    await Text.findByIdAndRemove(req.params.id, {
      useFindAndModify: false,
    });

    return res.send();
  },

  async deleteAllData(req, res, deletePass) {
    const { user_id } = req.headers;

    const user = await User.findById(user_id);
    // using cron-job.org with the user_id header to delete everything everyday at midnight GMT-3
    if (user == deletePass) {
      try {
        return await Text.deleteMany();
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await Text.deleteMany();
    } catch (err) {
      console.log(err);
    }
  },
};
