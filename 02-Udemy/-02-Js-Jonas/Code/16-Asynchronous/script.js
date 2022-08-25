'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${+(
          data.population / 1000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderErr = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// Our first AJAX call
//////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('Get', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${+(
//           data.population / 1000000
//         ).toFixed(1)}</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//     </article>
//     `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData('egypt');
// getCountryData('palestine');
// getCountryData('south africa');

///////////////////////////////////////
// Welcome callback hell
//////////////////////////////////////

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('Get', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // render data country 1
//     renderCountry(data);

//     // Get neighbour country
//     const neighbour = data.borders?.[0];

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('Get', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// // getCountryAndNeighbour('egypt');
// // getCountryAndNeighbour('palestine');
// getCountryAndNeighbour('south africa');

///////////////////////////////////////
// Handle erorr
//////////////////////////////////////

const getJSON = function (url, errMsg = 'Something went wrong') {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${errMsg} ${res.status}`);
    return res.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(res => {
//       console.log(res);

//       if (!res.ok) throw new Error(`Country not found ${res.status}`);

//       return res.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(res => res.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderErr(`Something went wrong 💥💥💥 ${err.message}, try again.`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) throw new Error('No neighbour found');

//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderErr(`Something went wrong 💥💥💥 ${err.message}, try again.`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

///////////////////////////////////////
// Event loop in practice
//////////////////////////////////////

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolver promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log('Test end!');

///////////////////////////////////////
// Building a simple promise
//////////////////////////////////////

// const lotteryPromise = new Promise(function (resolve, rejected) {
//   console.log('Lotter draw is haappining');
//   setTimeout(() => {
//     if (Math.random() <= 0.5) {
//       resolve('You win 💰');
//     } else {
//       rejected(new Error('You lost your money 💩'));
//     }
//   });
// }, 2000);

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisingify setTimeOut

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('I wait 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I wait 1 second'));

///////////////////////////////////////
// Building the geolocation API
//////////////////////////////////////

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.log(err)
// );

///////////////////////////////////////
// Building a simple promise
//////////////////////////////////////

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       console.log(pos);
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       if (!res.ok)
//         throw new Error(`Something went wrong with request ${res.status}`);

//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You ate in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found ${res.status}`);
//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.log(`${err} Something went wrong`));
// };

// btn.addEventListener('click', whereAmI);

///////////////////////////////////////
// Consuming promises with async await
//////////////////////////////////////

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getteing location data');
//     const dataGeo = await resGeo.json();
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error('Problem getteing country data');
//     const data = await res.json();
//     renderCountry(data[0]);
//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.error(`${err} 💥`);
//     renderErr(`Something went wrong 💥 ${err.message}`);

//     throw err;
//   }
// };

// console.log('FIRST');
// // whereAmI()
// //   .then(city => console.log(city))
// //   .catch(err => console.error(err.message))
// //   .finally(() => console.log('THIRD'));

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(city);
//   } catch (err) {
//     console.error(err);
//   }
//   console.log('THIRD');
// })();

///////////////////////////////////////
// Running promises in parallel
//////////////////////////////////////

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };
// get3Countries('Egypt', 'canada', 'south africa');

///////////////////////////////////////
// Promise.race
//////////////////////////////////////

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/italy`),
//     getJSON(`https://restcountries.com/v2/name/egypt`),
//     getJSON(`https://restcountries.com/v2/name/mexico`),
//   ]);

//   console.log(res[0]);
// })();

// const timeOut = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long'));
//     }, sec * 1000);
//   });
// };

// Promise.race([getJSON(`https://restcountries.com/v2/name/egypt`)], timeOut(5))
//   .then(res => console.log(res[0]))
//   .catch(err => console.log(err));

// // Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('succcess'),
//   Promise.reject('error'),
//   Promise.resolve('another succcess'),
// ]).then(res => console.log(res));

// Promise.all([
//   Promise.resolve('succcess'),
//   Promise.reject('error'),
//   Promise.resolve('another succcess'),
// ]).catch(err => console.log(err));

// // Promise.any
// Promise.any([
//   Promise.resolve('succcess'),
//   Promise.reject('error'),
//   Promise.resolve('another succcess'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
