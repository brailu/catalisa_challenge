// 1 coisa a se fazer, gerar 3 ids aleatorios.
// o id possue o min de 1 até 671 personagens.

function generate_random_value() {
    const random_value = Math.floor(Math.random() * 671);
    return random_value;
}

function generate_random_values() {
    let random_values = [];
    for (let i = 0; i < 3; i++) {
        random_values[i] = generate_random_value();
    }
    return random_values;
}

// 2 chamar as API e obter 3 personagens.
function get_characters() {
    let random_values = generate_random_values();
    let endpoint = "https://rickandmortyapi.com/api/character/" + random_values.join();
    return fetch(endpoint, {
        method: "GET", 
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        }
    }).then(function (response) {
        response.json().then(function (data) {
            render_characters(data);
        });
    })
}

// 3 alterar elementos html.
function render_characters(character_data) {
    for (let i = 0; i < 3; i++) {
        const element_id = "#character" + i;
        const element = document.querySelector(element_id);

        const img = element.querySelector("img");
        img.src = character_data[i].image;

        const name = element.querySelector(".character_name");
        name.innerHTML = character_data[i].name;

        const species = element.querySelector(".character_species");
        species.innerHTML = character_data[i].species;

        const status = element.querySelector(".character_status");
        status.innerHTML = character_data[i].status;
               
    }
}

// created: "2017-12-29T17:14:03.430Z"
// episode: ['https://rickandmortyapi.com/api/episode/7']
// gender: "Female"
// id: 168
// image: "https://rickandmortyapi.com/api/character/avatar/168.jpeg"
// location: {name: 'Gazorpazorp', url: 'https://rickandmortyapi.com/api/location/40'}
// name: "Jackie"
// origin: {name: 'Gazorpazorp', url: 'https://rickandmortyapi.com/api/location/40'}
// species: "Alien"
// status: "Alive"
// type: "Gazorpian"
// url: "https://rickandmortyapi.com/api/character/168"

// API permite obter mais de um personagem por vez.
// https://rickandmortyapi.com/documentation/#get-multiple-characters
// necessario gerar 3 ID aleatorios.

get_characters();

// criação do botão para interação do usuario
const button = document.querySelector("#button");

button.onclick = get_characters;