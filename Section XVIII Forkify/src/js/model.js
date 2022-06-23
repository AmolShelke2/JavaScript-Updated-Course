import { async } from 'regenerator-runtime';
import { API_url } from './config.js';
import { getJSON } from './helper.js';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_url}/${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
      image: recipe.image_url,
    };
    console.log(state.recipe);
  } catch (err) {
    // Temp error handling.
    console.error(`${err} ❤️‍🔥❤️‍🔥❤️‍🔥`);
  }
};
