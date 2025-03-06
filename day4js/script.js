const cards = [
    ["Cat","A feline that comes in many colors"],
    ["Dog","A friend that eats your shoes"],
    ["Mouse","A friend that gets in your pants"]
]

function flipCard(card, index) {
    let text = document.createElement('p') 

    if (card.dataset.flipped === 'true') { // if ('string') --> always comes out true
        card.dataset.flipped = 'false';
        text.innerText = cards[index][1] // use array to get card def

    } else {
        card.dataset.flipped = 'true';
        text.innerText = cards[index][0] // use array to get card term
    }

    card.innerHTML = "<p>" + text.innerText + "</p>"
}

function displayCards() {
    // goes through each card in list
    for (let i = 0; i < cards.length; i++) {
        let currCard = cards[i]
        let front = currCard[0] // front of card

        // creating the card
        let cardDiv = document.createElement('div')
        cardDiv.classList.add('card') // add class to card
        let text = document.createElement('p') // add ptag
        text.innerText = front
        
        cardDiv.appendChild(text)

        // basically just created <div class='card'> <p> Text </p> <div> but in js instead of html

        cardDiv.dataset.flipped = 'false' // access dataset property of card and set to false
        // <div dataset-flipped='false'> <p> Text </p> <div>
        cardDiv.addEventListener('click', ()=>flipCard(cardDiv, i)) // closure (function that also has memory inside of it; memory sticks with div)



        let allTheCards = document.getElementById('cards')
        allTheCards.appendChild(cardDiv)

    }
}

displayCards()