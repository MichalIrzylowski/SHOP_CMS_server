const { Item } = require("../../models");

// const seed = async () => {
//   console.log(await Item.find());
//   await Item.remove({});
//   console.log(await Item.find());
// };

// seed();

exports.addItem = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const item = await Item.create({ ...req.body, author: req.body.userId });
      item.populate("author", "login");
      return res.status(200).json(item);
    } else {
      return res
        .status(401)
        .json({ error: "Unauthorized! You must sign in to do that!" });
    }
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

exports.findItem = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    item.populate("author", "login");
    return res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};

exports.findItems = async (req, res, next) => {
  try {
    const Items = await Item.find().populate("author", "login");

    return res.status(200).json(Items);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const item = await Item.findById(req.params.id);
      await item.remove();
      return res.status(200).json({});
    } else {
      return res
        .status(401)
        .json({ error: "Unauthorized! You must sign in to do that!" });
    }
  } catch (error) {
    return next(error);
  }
};
