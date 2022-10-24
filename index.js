// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)OK

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.OK

// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
//coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
const result = document.getElementById("result");
const input = document.getElementById("inputSearch");

let country = [];

async function countrySearch(inputSearch) {
  await fetch(`https://restcountries.com/v3.1/all${inputSearch}`)
    .then((res) => res.json())
    .then((data) => (country = data[0]));
  //console.log(data);
}

function countryDisplay() {
  if (country === null) {
    result.innerHTML = "<h2>Aucun Résultat</h2>";
  } else {
    country.length = 24;

    result.innerHTML = country
      .map((Pays) => {
        let CountryName = [];

        for (let i = 1; i < 24; i++) {
          if (Pays[`name${i}`]) {
            let NameCountry = Pays[`name.common${i}`];
            let NameCapital = Pays[`capital${i}`];
            CountryName.push(`<li>${NameCountry} - ${NameCapital}</li>`);
          }
        }

        return `
      <li class="card">
        <h2>${Pays.capital}</h2>
        <p>${Pays.name.common}</p>
        <img src=${Pays.flag.png} alt="photo ${Pays.capital}">
        <ul>${CountryName.join("")}</ul>
      </li>
      `;
      })
      .join("");
  }
}

input.addEventListener("input", (e) => {
  countrySearch(e.target.value);
  console.log(e.target.value);
});
