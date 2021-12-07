import axios from "axios"
let url = 'https://pokeapi.co/api/v2/pokemon/'


const typeColors = {
  normal:"#e0e0e0",
  fighting:"#F0E8D1",
  flying:"#A7B5D1",
  poison:"#A977AA",
  ground:"#C3A17A",
  rock:"#C7B470",
  bug:"#FCE09A",
  ghost:"#BDAAE5",
  steel:"#E3E6F1",
  fire:"#ff8a8a",
  water:"#ADCEFF",
  grass:"#AAE396",
  electric:"#FAF57A",
  psychic:"#ff9cd1",
  ice:"#C7F8FF",
  dragon:"#B1ABFA",
  dark:"#9C9FBE",
  fairy:"#F7CBE5"
}

async function createCard() {
  for (let i = 1; i <= 150; i++){
    await axios.get(url + i)
    .then(res => res.data)
    .then(data => {
      //Create card
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
      card.appendChild(number);

      const title = document.createElement('h1');
      title.className = 'card_title'
      title.textContent = data.name[0].toUpperCase() + data.name.slice(1);
      card_content.appendChild(title);
      card.appendChild(title);

      //Color of Background
      const main_types = Object.keys(typeColors);
      const pokeType = data.types.map(type => type.type.name);
      const type = main_types.find(type => pokeType.indexOf(type) == 0);
      const color = typeColors[type];
      card.style.backgroundColor = color;


      // const info = document.createElement('h2');
      // info.className = 'card_text';
      // info.textContent = data.types.map(type => type.type.name).join(', ');
      // card_content.appendChild(info);
      // card.appendChild(info);

      const getcontainer = document.querySelector('#main');
      getcontainer.appendChild(card);
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

createCard();

const infoColors = {
  normal:"#e0e0e0",
  fighting:"#F0E8D1",
  flying:"#A7B5D1",
  poison:"#A977AA",
  ground:"#C3A17A",
  rock:"#C7B470",
  bug:"#FCE09A",
  ghost:"#BDAAE5",
  steel:"#E3E6F1",
  fire:"#ff8a8a",
  water:"#ADCEFF",
  grass:"#AAE396",
  electric:"#FAF57A",
  psychic:"#ff9cd1",
  ice:"#C7F8FF",
  dragon:"#B1ABFA",
  dark:"#9C9FBE",
  fairy:"#F7CBE5"
}

async function randomCard() {
 
  let pokemon = Math.floor(Math.random() * 150);
    await axios.get(url + pokemon)
    .then(res => res.data)
      .then(data => {
      //Create card
      const card = document.createElement('div');
      card.className = 'card';

      const card_content = document.createElement('div');
      card_content.className = 'card_body';

      
      const number = document.createElement('h2');
      number.className = "number";
      number.textContent = "#" + data.id.toString().padStart(3, 0);
      card_content.appendChild(number);
      card.appendChild(number);

      //Get pokemon image
      const img = document.createElement('img');
      img.src = data.sprites.front_default;
      img.className = 'card-image-front';
      card.appendChild(img);
        
      //Fill card elements
      const title = document.createElement('h1');
      title.className = 'card_title'
      title.textContent = data.name[0].toUpperCase() + data.name.slice(1);
      card_content.appendChild(title);
      card.appendChild(title);

      //Color of Background
      const main_types = Object.keys(typeColors);
      const pokeType = data.types.map(type => type.type.name);
      const type = main_types.find(type => pokeType.indexOf(type) == 0);
      const color = typeColors[type];
      card.style.backgroundColor = color;


      // const info = document.createElement('h2');
      // info.className = 'card_text';
      // info.textContent = data.types.map(type => type.type.name).join(', ');
      // card_content.appendChild(info);
      // card.appendChild(info);
      
      const getcontainer = document.querySelector('#randomPokemon');
      getcontainer.appendChild(card);
    })
    .catch((err) => {
      console.log(err);
    })
}

randomCard();

