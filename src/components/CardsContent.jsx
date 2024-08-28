/* Author: Tor Sdayur */

//contains cards container and navigation menu

import { useState, useEffect } from "react";

import CardsNav from "./CardsNav";
import CardsContainer from "./CardsContainer";

import filterFoodServices from "../scripts/filterFoodServices";
import getCards from "../scripts/getCards";

import "../styles/CardsContent.css"

export default function CardsContent({
    foodServices,
    boroughs,
    dist,
    availabilities,
    location
})
{
    const CARD_LIMIT = 6;

    //card navigation page
    const [page, setPage] = useState(0);
    const [cards, setCards] = useState(foodServices);
    const [filteredServices, setFilteredServices] = useState(foodServices);

    //obtain filtered food services
    useEffect(() => {
        setFilteredServices(filterFoodServices(
            foodServices, 
            boroughs,
            dist,
            availabilities,
            location
        ));
    }, [foodServices, boroughs, dist, availabilities]);

    useEffect(() => {
        setPage(0);
    }, [filteredServices]);
    
    //set cards actually displayed on the page
    useEffect(() => {
        setCards(getCards(filteredServices, page, CARD_LIMIT));
    }, [page, filteredServices]);

    return (
        <div className="cards-content">
            <CardsContainer cards={cards}/>
            <CardsNav
                cardsSize={filteredServices.length}
                cardLimit={CARD_LIMIT}
                page={page}
                setPage={setPage}
            />
        </div>
    );
}