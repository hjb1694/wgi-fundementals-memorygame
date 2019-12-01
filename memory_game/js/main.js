console.log('up and running');


const cards = [
    {
        rank: 'queen', 
        suit : 'hearts',
        image : 'images/queen-of-hearts.png'
    },
    {
        rank : 'queen',
        suit : 'diamonds',
        image : "images/queen-of-diamonds.png"
    },
    {
        rank : 'king',
        suit : 'diamonds',
        image : "images/king-of-hearts.png"
    },
    {
        rank : 'king',
        suit : 'hearts',
        image : "images/king-of-diamonds.png"
    }
];

const cardsInPlay = [];

function createBoard(){

    for(let i = 0; i < cards.length; i++){

        let cardElement = document.createElement('img');
        cardElement.setAttribute('src','images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.querySelector('#game-board').appendChild(cardElement);

    }

}

function checkForMatch(){

    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}

function flipCard(){

    let cardId = this.getAttribute('data-id');

    this.setAttribute('src', cards[cardId].image);

    cardsInPlay.push(cards[cardId].rank);

    if(cardsInPlay.length === 2){

       checkForMatch();

    }

}

createBoard();

