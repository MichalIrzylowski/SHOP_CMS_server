const { Message } = require("../../models");

const jwt = require("jsonwebtoken");

exports.loadMessages = async (req, res, next) => {
  try {
    const messages = await Message.find();
    return res.status(200).json(messages);
  } catch (error) {
    return next(error);
  }
};

exports.addMessage = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const decodedUser = await jwt.verify(
        req.headers.authorization.split(" ")[1],
        process.env.SECRET_KEY
      );
      const message = await Message.create(req.body);
      message.author = decodedUser.id;
      await message.save();
      await message.populate("author");
      return res.status(200).json(message);
    } else {
      return res
        .status(401)
        .json({ error: "Unauthorized! You must sign in to do that!" });
    }
  } catch (error) {
    return next(error);
  }
};
