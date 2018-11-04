const jwt = require("jsonwebtoken");

const { User } = require("../../../models");

async function seed() {
  console.log(await User.find());
  await User.remove({});
  console.log(await User.find());
}

seed();

const register = async (req, res, next) => {
  try {
    let user = await User.create(req.body);
    let { id, login } = user;

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

module.exports = register;
