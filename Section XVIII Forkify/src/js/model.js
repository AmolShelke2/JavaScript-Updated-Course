import { async } from 'regenerator-runtime';
import { API_url } from './config.js';
import { getJSON } from './helper.js';
import recipeView from './views/recipeView.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
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
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const data = await getJSON(`${API_url}/?search=${query}`);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
  } catch (err) {
    console.error(`${err} ❤️‍🔥❤️‍🔥❤️‍🔥`);
    throw err;
  }
};

loadSearchResults('Pizza');
