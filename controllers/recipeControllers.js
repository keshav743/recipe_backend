const Recipe = require("../models/recipe");

module.exports.getAllRecipesController = async (req, res, next) => {
  const queriedRecipes = await Recipe.find({})
    .sort({ createdAt: "desc" })
    .exec();
  return res.status(200).json({
    status: "success",
    data: {
      recipe: queriedRecipes,
    },
  });
};

module.exports.getRecipeByIdController = async (req, res, next) => {
  const queriedRecipe = await Recipe.findById(req.params.id);
  return res.status(200).json({
    status: "success",
    data: {
      recipe: queriedRecipe,
    },
  });
};

module.exports.addNewRecipeController = async (req, res, next) => {
  const newRecipe = await Recipe.create(req.body);
  return res.status(201).json({
    status: "success",
    data: {
      recipe: newRecipe,
    },
  });
};

module.exports.editRecipeController = async (req, res, next) => {
  const newRecipe = await Recipe.findById(req.params.recipeId);
  if (newRecipe.userId == req.params.userId) {
    newRecipe.recipeName = req.body.recipeName;
    newRecipe.recipeDescription = req.body.recipeDescription;
    newRecipe.recipeImage = req.body.recipeImage;
    newRecipe.cookingTime = req.body.cookingTime;
    newRecipe.recipeType = req.body.recipeType;
    newRecipe.recipeProcedure = req.body.recipeProcedure;
    newRecipe.ingredients = req.body.ingredients;
    await newRecipe.save();
    return res.status(201).json({
      status: "success",
      data: {
        recipe: newRecipe,
      },
    });
  } else {
    console.log(newRecipe.userId, req.params.userId);
    return res.status(404).json({
      status: "failure",
      data: {
        errMsg: "Permission Denied. You cannot access/modify this resource.",
      },
    });
  }
};
