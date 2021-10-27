const express = require("express");
var router = express.Router();

const recipeController = require("../controllers/recipeControllers.js");
const tokenMiddleware = require("../middlewares/checkToken.js");

router.get(
  "/all",
  tokenMiddleware.checkToken,
  recipeController.getAllRecipesController
);

router.post(
  "/new",
  tokenMiddleware.checkToken,
  recipeController.addNewRecipeController
);

router.post(
  "/edit/:recipeId/:userId",
  tokenMiddleware.checkToken,
  tokenMiddleware.checkForPermission,
  recipeController.editRecipeController
);

router.get(
  "/:id",
  tokenMiddleware.checkToken,
  recipeController.getRecipeByIdController
);

module.exports = router;
