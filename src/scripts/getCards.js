/* Author: Tor Sdayur */

//fetchs cards which should actually appear on the webpage
export default function getCards(filteredServices, page, cardLimit)
{
    let cards = [];
    let startPosition = page * cardLimit
    let endPosition = startPosition + cardLimit;

    //in the case we are at the final page
    if (endPosition > filteredServices.length)
    {
        endPosition = filteredServices.length;
    }

    for (let i = startPosition; i < endPosition; i++)
    {
        cards.push(filteredServices[i]);
    }
    
    //setCards(cards);
    return cards;
}