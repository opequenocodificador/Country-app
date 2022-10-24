// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all) OK

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable OK

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
//coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
const input = document.getElementById("inputSearch");
let countriesContainer = document.querySelector(".countries_container");

let countryApp = [];

async function fetchCountryApp() {
  await fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => (countryApp = data));
  console.log(countryApp);
}
fetchCountryApp();

countriesContainer.innerHTML = countryApp.map((pays) => `<h3>Bonjour<h3>`);

input.addEventListener("input", (e) => {
  fetchCountryApp(e.target.value);
});

//.then((data) => (countryApp = data));
//console.log(countryApp);
