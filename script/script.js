var deck = [];
var text = "Pedro"
// Hämtar data ifrån JSON och skriver ut det i en array

fetch("../JSON/cards.json").then(response => {
    response.json().then(json => {
        let data = json;
        deck = data;
        shuffla(deck);
        console.log(deck);

// Loopar igenom array och skriver ut korten 
            for(i=0; i < deck.length; i++) {

                var stuff = document.querySelector('div');
                var img = document.createElement("img");
                img.src = deck[i].image;
                img.classList = "Bild";
                stuff.appendChild(img);

            }
    })
});


function shuffla (array) {
    for (var a = array.length - 1,b, rand; a > 0; a--){
        rand = Math.floor(Math.random() * (a + 1));
        b = array[a], array[a] = array[rand], array[rand] = b;
    }
    return array;
}



