var deck;

fetch("../JSON/cards.json").then(response => {
    response.json().then(json => {
        let data = json;
        deck = data;

            for(i=0; i < deck.length; i++) {

                var stuff = document.querySelector('div');
                var img = document.createElement("img");
                img.src = deck[i].image;
                img.classList = "Bild";
                stuff.appendChild(img);

            }
    })
});



