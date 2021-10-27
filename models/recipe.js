const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema(
  {
    recipeName: {
      type: String,
      required: [true, "Recipe Name required"],
    },
    recipeDescription: {
      type: String,
      required: [true, "Recipe Description required"],
    },
    recipeImage: {
      type: String,
      required: [true, "Recipe Image required"],
    },
    recipeProcedure: {
      type: [String],
      required: [true, "Recipe Procedure required"],
    },
    recipeType: {
      type: String,
      required: [true, "Recipe Type required"],
    },
    cookingTime: {
      type: Number,
      required: [true, "Cooking Time required"],
    },
    userId: {
      type: String,
      required: [true, "User Id required"],
    },
    ingredients: {
      type: [String],
      required: false,
    },
    userName: {
      type: String,
      required: [true, "User Name required"],
    },
  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
