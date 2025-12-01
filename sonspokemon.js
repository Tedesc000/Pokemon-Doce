const pokemonSounds = {
    machamp: new Audio("sons/machamp.mp3"),
    gardevoir: new Audio("sons/gardevoir.mp3"),
    butterfree: new Audio("sons/butterfree.mp3"),
    charizard: new Audio("sons/charizard.mp3"),
    garchomp: new Audio("sons/garchomp.mp3"),
    tyranitar: new Audio("sons/tyranitar.mp3"),
    krookodile: new Audio("sons/krookodile.mp3"),
    gyarados: new Audio("sons/gyarados.mp3"),
    swampert: new Audio("sons/swampert.mp3"),
    gengar: new Audio("sons/gengar.mp3")
};

function playPokemonSound(name) {
    const audio = pokemonSounds[name];
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}

function onEnterLocation(location) {

    const map = {
        cidade: "machamp",
        floresta: "gardevoir",
        florestadeserto: "butterfree",
        deserto: "charizard",
        desertomontanha: "garchomp",
        montanha: "tyranitar",
        montanhapraia: "krookodile",
        praia: "gyarados",
        praiacasa: "swampert",
        casaassombrada: "gengar"
    };

    const pokemonName = map[location];
    if (pokemonName) playPokemonSound(pokemonName);
}

