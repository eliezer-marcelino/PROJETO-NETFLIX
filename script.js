let cards = document.getElementsByClassName("card");
let textCardsClicked = document.querySelector(".text-cards-clicked");

const classCardClicado = "card-clicked";

let cardsClicked = [];

textCardsClicked.innerHTML = "Você não selecionou :(";

for (let card of cards) {
    card.addEventListener("click", function () {
        let { serie, name } = card.dataset;

        let cardFoiClicado = card.classList.contains(classCardClicado);

        if (cardFoiClicado) {
            card.classList.remove(classCardClicado);
        } else {
            card.classList.add(classCardClicado);
            cardsClicked.push( {serie, name});
        }


        if (cardsClicked.length==0){

        }else{
            textoCardsClicado.classList.remove("no-text-card-clicked");
            textoCardsClicado.classList.add("text-card-clicked");
            let text = "Você selecionou:";
            for (let cardClicado of cardsClicados){
                text += `<p>${cardClicado.name}</p>`;
            }

            text += ":)";
        
            textoCardsClicado.innerHTML = text;


     }       
    });
}




