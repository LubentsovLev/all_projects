const pokeContainer = document.querySelector(".pokemons__container");
const getPokemons = document.querySelector(".get_pokemons");
const hidePokemons = document.querySelector(".hide_pokemons");
const save_pokemons = document.querySelector(".save_pokemons");
const pokemons_i_1 = document.querySelector(".pokemons_i_1");
const pokemons_i_2 = document.querySelector(".pokemons_i_2");
const pokeInp = document.querySelector(".pokemons_input");
const pokemons_from = +pokemons_i_1.value;
const Pokecolors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};
const main_types = Object.keys(Pokecolors);

const fetchPkemons = async (from, howManey) => {
  //debugger
  for (let i = from; i < from + howManey; i++) {
    await getPocemon(i);
  }
};

const getPocemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPcemonCard(pokemon);
};

const createPcemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon__card");
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const pokeTypes = pokemon.types.map((t) => t.type.name);
  const pokeType = main_types.find((type) => pokeTypes.indexOf(type) > -1);
  const pokeColor = Pokecolors[pokeType];
  pokemonEl.style.backgroundColor = pokeColor;
  const pokeInner = `
    <div class="poke__img-container" >
        <img src="https://pokeres.bastionbot.org/images/pokemon/${
          pokemon.id
        }.png" >
    </div>
    <div class="pokemon__info" >
        <span class="pokemon__number">${pokemon.id
          .toString()
          .padStart(3, "0")}</span>
        <h3 class="pokemon__name">${name}</h3>
        <small class="pokemon__type">Type: <span>${pokeType}</span></small>
    </div>
    ${name}
    `;

  getPokemons.addEventListener("click", () => {
    pokemonEl.innerHTML = pokeInner;
    pokeContainer.appendChild(pokemonEl);
  });
  hidePokemons.addEventListener("click", () => {
    pokeContainer.innerHTML = "";
  });
};
save_pokemons.addEventListener("click", () => {
  getPokemons.classList.add("show");
  hidePokemons.classList.add("show");
  save_pokemons.classList.add("none");
  pokeInp.classList.add("none");
  fetchPkemons(
    pokemons_i_1.value === "" ? 1 : +pokemons_i_1.value,
    pokemons_i_2.value === "" ? 10 : +pokemons_i_2.value
  );
});
