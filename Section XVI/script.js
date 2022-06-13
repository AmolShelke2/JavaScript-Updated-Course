'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// render country
const renderCountry = function (data, className = '') {
  const html = `
     <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages}</p>
            <p class="country__row"><span>💰</span>${data.currencies}</p>
          </div>
        </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

// render error text
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};
/*
// Our First Ajax call
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
     <article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.hin}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies.INR.name
            }</p>
          </div>
        </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('Bharat');
*/

// Callback Hell

/*
const getCountryAndNeighbour = function (country) {
  // Ajax call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // Ajax call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    // Nested Callbacks
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('usa');

// Example
setTimeout(() => {
  console.log('One second Passed');
  setTimeout(() => {
    console.log('Two second Passed');
    setTimeout(() => {
      console.log('Three second Passed');
      setTimeout(() => {
        console.log('Four second Passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/
// Promises and the Fetch Api

/*
// const request2 = new XMLHttpRequest();
// request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
// request2.send();

const request = fetch('https://restcountries.com/v3.1/name/${Bharat}');
console.log(request);

// Learned About Promises and Fetch API
*/

// Consuming promises.

// const request = fetch('https://restcountries.com/v3.1/name/${Bharat}');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// Simplier way
/*

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok)
      //
      throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);

      if (!response.ok)
        //
        throw new Error(`Country not found (${response.status})`);

      return response.json();
      // err => alert(err)
    })
    .then(data => {
      renderCountry(data[0]);
      // const neighbour = data[0].borders[0];
      const neighbour = 'dddkkkdk';

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country Not found (${response.status})`);
      return response.json();
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} ❤️‍🔥❤️‍🔥❤️‍🔥`);
      renderError(`Something went wrong 🧨🔥 ${err.message}. Try agin!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};


const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country Not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      console.log(neighbour);

      if (!neighbour) throw new Error(`No Neighbour found`);

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country Not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} ❤️‍🔥❤️‍🔥❤️‍🔥`);
      renderError(`Something went wrong 🧨🔥 ${err.message}. Try agin!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// Handeling Rejected promises
btn.addEventListener('click', function () {
  getCountryData('Bharat');
});

getCountryData('australia');
*/

// Coding challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country 
ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and
 a longitude value (lng) (these are GPS coordinates, examples are below).

2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means
 to convert coordinates to a meaningful location, like a city and country name.
  Use this API to do reverse geocoding: https://geocode.xyz/api.

The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. 
Use the fetch API and promises to get the data. Do NOT
 use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all 
the attributes that you recieved about the provided location. Then, 
using this data, log a messsage like this to the console: 'You are in Berlin, Germany'

4. Chain a .catch method to the end of the promise
 chain and log errors to the console

5. This API allows you to make only 3 requests per second.
 If you reload fast, you will get this error with code 403.
  This is an error with the request. Remember, fetch() does
   NOT reject the promise in this case. So create an error to reject the
    promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country.
 So take the relevant attribute from the geocoding API result, and 
 plug it into the countries API that we have been using.

7. Render the country and catch any errors, just like we have done
 in the last lecture (you can even copy this code, no need to type the same code)
 
TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
GOOD LUCK 😀
*/
