import axios from "axios"
let url = 'https://pokeapi.co/api/v2/pokemon/'

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
