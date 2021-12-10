import axios from "axios"
import { typeColors } from "./info"
import { statsInfo } from "./info"
let url = 'https://pokeapi.co/api/v2/pokemon/'

const maincontainer = document.querySelector('#main');
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const body = document.body;

async function createCard(id) {
  await axios.get(url + id)
    .then(res => res.data)
    .then(data => {
      //Create card - turn it into a button so that it is clickable
      const card = document.createElement('div');
      card.className = 'card';

      //Get pokemon image
      const img = document.createElement('img');
      img.src = data.sprites.front_default;
      img.className = 'card-image-front';
      card.appendChild(img);

      //Fill card elements
      const card_content = document.createElement('div');
      card_content.className = 'card_body';

      const number = document.createElement('h2');
      number.className = "number";
      number.textContent = "#" + data.id.toString().padStart(3, 0);
      card_content.appendChild(number);

      const title = document.createElement('h1');
      title.className = 'card_title'
      title.textContent = data.name[0].toUpperCase() + data.name.slice(1);
      card_content.appendChild(title);

      //Color of Background
      const main_types = Object.keys(typeColors);
      const pokeType = data.types.map(type => type.type.name);
      const type = main_types.find(type => pokeType.indexOf(type) == 0);
      const color = typeColors[type];
      card.style.backgroundColor = color;

      card.appendChild(card_content);
      maincontainer.appendChild(card);

      card.addEventListener("click", (event) => {
        event.preventDefault();
        //body.style.backgroundColor = color;
        clearInfo();
        statsInfo(data.id, maincontainer);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

async function createList() {
  for (let i = 1; i <= 898; i++) {
    await createCard(i);
  }
}

createList();

const clearInfo = () => {
  while (maincontainer.firstChild) {
    maincontainer.firstChild.remove();
  }
};

function searchEvent(event) {
  event.preventDefault();
  clearInfo();
  let value = input.value.toLowerCase();
  createCard(value);
}

submit.addEventListener("click", (event) => {
  searchEvent(event);
});

document.addEventListener("keypress", (event) => {
  if (event.key === 'Enter') {
    searchEvent(event);
  }
});






