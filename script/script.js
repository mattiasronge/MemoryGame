// Skapar alla globala variabler 

var deck = [];
var cards = document.getElementsByTagName('img');
var firstElem = null;
var firstValue = null;

// Hämtar data ifrån JSON och sparar den i mitt tomt array
// sen användar jag min shuffla funktion för att shuffla den

fetch("../JSON/cards.json").then(response => {
    response.json().then(json => {
        let data = json;
        deck = data;
        shuffla(deck);

// Loopar igenom array och skriver ut korten 

        //För varje objekt i mitt array så skapar jag html elements (i detta fall: alla kort) 
        //jag ger dem olika classer och id så att jag kan jämföra dem senare i min kod
        //sen appendar jag alla elements jag har skapat till min div som ligger i index.html

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

        //För varje element jag har skapat så använder jag en eventlistener för att lyssna efter 'click'
        //sen sparar jag värdet av första elementet som har klickats för att jamföra den med nästa click
        //Beroende på värdet så matchas korten och klasser ändras beroende på det. 

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
                 

                } else if (firstValue === target.id && firstElem !== target) {

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

// Här shufflas alla objekt i min array, så att dem ligger i random position.
function shuffla (array) {
    for (var a = array.length - 1,b, rand; a > 0; a--){
        rand = Math.floor(Math.random() * (a + 1));
        b = array[a], array[a] = array[rand], array[rand] = b;
    }
    return array;
}

