let pokemonlist = [
    {name: 'Bulbasaur', height: .7, type: ['grass','posion'] },
    {name: 'Charizard', height: 1.7, type: ['fire', 'flying']},
    {name: 'Sandslash', height: 1, type: 'ground'},
    {name: 'Ninetales', height: 1.1, type: 'fire'},
    {name: 'Muk', height: 1.2, type: 'posion'}
];

let text = "";


for (let i =0;pokemonlist[i];i++) {
    document.write(pokemonlist[i].name + ' ');
    document.write(' Height: ' + pokemonlist[i].height + ' ');
    if (pokemonlist[i].height > 1.1){
        document.write('\n'+' Woah that\'s a big pokemon ');
    }
}
    // } else if (pokemonlist[i].height < 1.1 && pokemonlist[i].height > .8) {
    //     document.write(' Woah that\'s a average pokemon ');
    // } else {
    //     document.write(' Woah that\'s a small pokemon');
    // Realized later I was only suposed to highlight special pokemon. 
