window.onload = function() {

    let list = document.querySelector(".pokemon-list")

    const url = "https://pokeapi.co/api/v2/pokemon"
    const options = {
        method: "get",
        cors: "cors",
        redirect: "follow",
        cache: "default"
    }

    fetch(url,options)
        .then((response) => {
           return response.json()
        })
        .then((data) => {
            let content = '';
            console.log(data)
            for(let i = 0; i < data.results.length; i++){
                content += `<li class="pokemon-card">`;
                content += `<a href="#" data-name="${data.results[i].name}">`;
                content += `<i class="fa-solid fa-star"></i>` 
                content += `<img class="pokemon-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png"></img>`;
                content += `<h2 class="pokemon-title">${data.results[i].name}</h2>`;
                content += `</a>`;
                content += `</li>`;
            }
            list.innerHTML = content
        })
}