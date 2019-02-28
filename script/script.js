var deck = [];

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
                img.classList = "hiddenImg"
                imgBox.classList = "imgBox";
                img.setAttribute("id", deck[index].value);
                imgBox.appendChild(img);
                stuff.appendChild(imgBox);
                var firstElem = null;
                var firstValue = null;
       
    
                img.addEventListener('click',  (e) => {
            
             
                    var target = e.target || e.srcElement;
                    img.classList.remove("hiddenImg");
                    img.classList.add("shownImg");
    
                    if (firstValue === null){

                        firstElem = target;
                        firstValue = target.id;
                        console.log(firstValue);

                    } else if (firstValue === target.id && target !== firstElem) {

                        firstValue = null;
                        
                        imgBox.classList.add("noImg");
                        imgBox.classList.remove("imgBox");
            
                        console.log("They the same yo");
                        console.log(firstValue);

                    } else {

                        firstValue = null;
                        console.log(firstValue);
                   
                    }
                });
        })

    })
});

function shuffla (array) {
    for (var a = array.length - 1,b, rand; a > 0; a--){
        rand = Math.floor(Math.random() * (a + 1));
        b = array[a], array[a] = array[rand], array[rand] = b;
    }
    return array;
}



