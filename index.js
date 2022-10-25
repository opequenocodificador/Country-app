// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all) OK

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable OK

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP OK

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
//coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays

const input = document.getElementById("inputSearch");
const countriesContainer = document.querySelector(".countries_container");
const result = document.getElementById("result");
let countriesData = [];

//Fonction Data

async function fetchCountries() {
  await fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => (countriesData = data));
  console.log(countriesData);
  countriesDisplay();
}

//Fonction affichage

function countriesDisplay() {
  countriesContainer.innerHTML = countriesData
    .map(
      (country) =>
        `
  <div class="card">
  <img src=${country.flags.svg}>
  <h3>${country.translations.fra.common}</h3>
  <h3>${country.capital}</h3>
  <h3>Population: ${country.population}
  </div>
  `
    )
    .join("");
}

//Addevent

//chargement de la logique de data avec l'affichage
window.addEventListener("load", fetchCountries);

//récupération des données de l'input pour le filter
input.addEventListener("input", (e) => {
  fetchCountries(e.target.value);
  console.log(e.target.value);
});
