const login = async (req, res, next) => {
  console.log(req.body);
  return res.status(200).json({ status: req.body });
};

module.exports = login;
