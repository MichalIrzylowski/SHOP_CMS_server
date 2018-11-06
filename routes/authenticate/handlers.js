const jwt = require("jsonwebtoken");

const { User } = require("../../models");

async function seed() {
  console.log(await User.find());
  await User.remove({});
  console.log(await User.find());
}

seed();

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ login: req.body.login });
    const isCorrectPassword = await user.comparePassword(req.body.password);
    if (isCorrectPassword) {
      const { id, login } = user;

      const token = jwt.sign({ id, login }, process.env.SECRET_KEY);

      return res.status(200).json({ id, login, token });
    } else {
      return next({ status: 400, message: "Invalid login/password" });
    }
  } catch (error) {
    console.log(error);
    return next({ status: 400, message: "Invalid login/password" });
  }
};

exports.register = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    const { id, login } = user;

    const token = jwt.sign(
      {
        id,
        login
      },
      process.env.SECRET_KEY
    );

    return res.status(200).json({ id, login, token });
  } catch (error) {
    if (error.code === 11000) {
      error.message = "Sorry... this email is already taken!";
    }

    return next({ status: 400, message: error.message });
  }
};
