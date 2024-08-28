/* Author: Tor Sdayur */

// contains cards

import Card from "./Card";
import '../styles/CardsContainer.css'

export default function CardsContainer({cards})
{
    return (
        <div className="cards-container">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    phone={card.phone}
                    address={card.address}
                    days={card.days}
                    hours={card.hours}
                />
            ))}
        </div>
    );
}