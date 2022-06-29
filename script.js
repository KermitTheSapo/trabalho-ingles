//Crie 3 variáveis, cada uma com um array:
// -Comedy
// -Action
// -Fantasy 

//Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:
// -title:
// -director:
// -year: 

// *DESAFIO EXTRA* 

//Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console: 
// IF: "MY FAVORIT MOVIE IS..."
// ELSE: "NOT EVEN 5 STARS..." 

var comedy = [{
    title: "Superbad",
    director: "Greg Mottola",
    year: 2007
}]

var action = [{
    title: "Doctor Strange in the Multiverse of Madness",
    director: "Sam Raimi",
    year: 2022
}]

var fantasy = [{
    title: "Luca",
    director: "Erico Casarosa",
    year: 2021
}]

if (comedy[0].title === "Superbad") {
    console.log("MY FAVORIT MOVIE IS SUPERBAD")
} else {
    console.log("NOT EVEN 5 STARS")
}

