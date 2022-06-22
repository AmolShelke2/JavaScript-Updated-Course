const recipeContainer = document.querySelector('.recipe');

const timeOut = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took to long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
