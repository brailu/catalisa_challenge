// script.js
// 
// Get random characters from Rick and Morty API and renders.
//
// Rick and Morty API let you get multiple characters: 
// https://rickandmortyapi.com/documentation/#get-multiple-characters
//
// Author: https://github.com/brailu


// Return 3 random values (array) between 1 and 671.
generate_random_values = () => {
    const max_id = 671;
    let random_values = [];
    for (let i = 0; i < 3; i++) {
        random_values[i] = Math.floor(Math.random() * max_id);
    }
    return random_values;
}

// Get and return 3 random characters (array) from API.
// Using arrow function '=>'
get_characters = () => {

    // Example: https://rickandmortyapi.com/api/character/1,2,3
    const endpoint = "https://rickandmortyapi.com/api/character/" + generate_random_values().join();

    return fetch(endpoint, {
        method: "GET", 
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        }
    }).then((response) => {
        // Convert response (array) to JSON
        response.json().then((json_response) => {
            // Render characters using JSON response (array)
            render_characters(json_response);
        });
    })
}

// Renders 3 characters from JSON response
render_characters = (characters) => {
    for (let i = 0; i < 3; i++) {
        // Get char element by id (li)
        const char = document.querySelector("#char" + i);

        // Get char image element and set src and alt
        const char_image = char.querySelector(".char_image");
        char_image.src = characters[i].image;
        char_image.alt = characters[i].name;

        // Get char name element and set src and alt
        char.querySelector(".char_name").innerHTML = characters[i].name;

        // Get char species element and set src and al
        char.querySelector(".char_species").innerHTML = characters[i].species;

        // Get char status element and set src and alt
        char.querySelector(".char_status").innerHTML = characters[i].status;  
    }
}

// Get the initial characters when the page is loaded
get_characters();

// Configure the button to get characters
document.querySelector("#button").onclick = get_characters;