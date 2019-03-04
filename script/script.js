var deck = [];
var cards = document.getElementsByTagName('img');
var firstElem = null;
var firstValue = null;

// Hämtar data ifrån JSON och skriver ut det i en array

fetch("../JSON/cards.json").then(response => {
    response.json().then(json => {
        let data = json;
        deck = data;
        shuffla(deck);
        console.log(deck);

// Loopar igenom array och skriver ut korten 

        deck.forEach(function (thisItem, index) {

                var stuff = document.querySelector('div');
                var imgBox = document.createElement("div");
                var img = document.createElement("img");
                img.src = deck[index].image;
                img.classList = "hiddenImg";
                img.classList.add(index);
                imgBox.classList.add("imgBox");
                img.setAttribute("id", deck[index].value);
                imgBox.appendChild(img);
                stuff.appendChild(imgBox);

        })

        for (var i = 0; i < cards.length; i++) {

            cards[i].addEventListener('click',(e) => {

                var target = e.target || e.srcElement;

                setTimeout(() => {
                        
                    firstElem.classList.remove("hiddenImg");
                    firstElem.classList.add("shownImg");

                    target.classList.remove("hiddenImg");
                    target.classList.add("shownImg");
                    
                }, 300);

                if (firstValue === null){

                    firstValue = target.id;
                    firstElem = target;

                    console.log("Card value is:",firstValue);
                 

                } else if (firstValue === target.id) {

                    firstValue = null;

                    console.log("Cards match!");    

                    firstElem.classList.add("matchedCard");
                    target.classList.add("matchedCard");
                } 
                else {

                    firstValue = null;
                    console.log("Card value is:", target.id);
                    console.log("Cards dont match, turning cards now");

                    setTimeout(() => {

                        firstElem.classList.remove("shownImg");
                        firstElem.classList.add("hiddenImg");

                        target.classList.remove("shownImg");
                        target.classList.add("hiddenImg");

                    }, 800);
                }
            });
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

