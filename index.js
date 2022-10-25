// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all) OK

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable OK

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
//coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays

const input = document.getElementById("inputSearch");
const countriesContainer = document.querySelector(".countries_container");
const result = document.getElementById("result");
let countryApp = [];

//Fonction Data

async function fetchCountryApp() {
  await fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => (countryApp = data));
  console.log(countryApp);
}
fetchCountryApp();

//Fonction affichage

function countriesDisplay() {
  countriesContainer.innerHTML;
  input.innerHTML = countryApp.map((data) => {
    return `
  <div class="Country">
    <img src=${data[0].flags.png}>
    <h3>${data[0].name.common}</h3>
    <p>${data[0].capital[0]}</p>
    <em>Population:${data[0].population} </em>
  </div>
`;
  });
  console.log(countriesDisplay);
}
countriesDisplay();

//Addevent

input.addEventListener("input", (e) => {
  fetchCountryApp(e.target.value);
  //console.log(e.target.value);
});
