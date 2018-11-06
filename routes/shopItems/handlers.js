exports.addItem = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      console.log(req.headers.authorization);
      return res.status(200).json({ type: "Working" });
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
