import { useState, useEffect } from "react";

import FilterMenu from "./FilterMenu"
import Map from "./Map"
import CardsContent from "./CardsContent";

import { getFoodServices } from '../scripts/getFoodServices'
import { onClickDropdownHandler, distSubmitHandler } from "../scripts/handleFilters";
import { getLocation } from "../scripts/getLocation";

import '../styles/Container.css'

//contains major web content
export default function Container({foodTable})
{
    //for filtering cards
    const [boroughs, setBoroughs] = useState([]);
    const [dist, setDist] = useState('');
    const [availabilities, setAvailabilities] = useState([]);

    //user location
    const [location, setLocation] = useState({});

    const foodServices = getFoodServices(foodTable)

    //get user location
    useEffect(() => {
        getLocation(setLocation);
    }, [])
    
    //handle filtering selection
    const onClickBoroughs = (selectedBorough) => {
        onClickDropdownHandler(boroughs, selectedBorough, setBoroughs);
    };

    const onClickAvailabilities = (selectedAvailability) => {
        onClickDropdownHandler(availabilities, selectedAvailability, setAvailabilities);
    }

    const onKeyDownDist = (keyPressed, selectedDist) => {
        distSubmitHandler(keyPressed, selectedDist, setDist);
    };


    return (
        <div className="container">
            <FilterMenu 
                onClickBoroughs={onClickBoroughs}
                onClickAvailabilities={onClickAvailabilities}
                onKeyDownDist={onKeyDownDist}
            />
            <div className="content-container">
                <Map location={location}/>
                <CardsContent
                    foodServices={foodServices}
                    boroughs={boroughs}
                    dist={dist}
                    availabilities={availabilities}
                    location={location}
                />
            </div>
        </div>
    );
}