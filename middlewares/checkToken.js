const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

const Recipe = require("../models/recipe");

module.exports.checkToken = async (req, res, next) => {
  if (req.headers.authorization) {
    jwt.verify(req.headers.authorization, "secret", async (err, decoded) => {
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return res.status(401).json({
          status: "failure",
          data: {
            err: "Invalid Token",
          },
        });
      }
      return next();
    });
  } else {
    return res.status(401).json({
      status: "failure",
      data: {
        err: "No Token Found",
      },
    });
  }
};

module.exports.checkForPermission = async (req, res, next) => {
  const recipe = await Recipe.findById(req.params.recipeId);
  console.log(recipe.userId, req.params.userId);
  if (recipe.userId == req.params.userId) {
    return next();
  } else {
    return res.status(404).json({
      status: "failure",
      data: {
        err: "Permission Denied",
      },
    });
  }
};
