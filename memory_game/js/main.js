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

function checkForMatch(){

    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    } else {
    console.log("Sorry, try again.");
    }
}

function flipCard(cardId){

    console.log('User flipped' + cards[cardId].rank);
    console.log(cards[cardId].image);
    console.log(cards[cardId].suit);

    cardsInPlay.push(cards['cardId'].rank);

    if(cardsInPlay.length === 2){

       checkForMatch();

    }

}

flipCard(2);

