fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then(Response => Response.json())
    .then(allpokemon => {
        allpokemon.results.map((val) => {
            var pokemons = [];

            allpokemon.results.map((val) => {


                fetch(val.url)
                    .then(Response => Response.json())
                    .then(pokemonsingle => {
                        pokemons.push({ nome: val.name, imagem: pokemonsingle.sprites.front_default });

                        if (pokemons.length == 20) {

                        }

                        var pokemonboxes = document.querySelector('.pokemon-boxes');
                        pokemonboxes.innerHTML = "";
                        // console.log(pokemons);
                        pokemons.map(function (val) {
                            pokemonboxes.innerHTML+=`
                            <div class="pokemon-box">
                                <img src="`+val.imagem+`" alt=""
                                    class="src">
                                    <p>`+val.nome+`</p>
                            </div>
                            
                            `;

                        })
                    })
            })
        })
        pokemons.map((val) => {
            console.log(val.nome)
        })
    })