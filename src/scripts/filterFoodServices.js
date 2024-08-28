/* Author: Tor Sdayur */

import haversine from 'haversine-distance'

export default function filterFoodServices(
    foodServices,
    boroughs,
    dist,
    availabilities,
    location
)
{
    //foodServices represents all available food services from db
    let filteredFoodServices = foodServices;
    //boroughs currently selected are filtered for
    if (boroughs.length)
    {
        filteredFoodServices = filteredFoodServices.filter(
            (foodService) => boroughs.includes(foodService.borough));
    }
    //filters for distance
    if (dist.length)
    {
        filteredFoodServices = filteredFoodServices.filter(
            (foodService) => {
                return Number(dist) >= metersToMiles(haversine(location, foodService.pos));
            }
        )
    }
    //filters for days available
    if (availabilities.length)
    {
        filteredFoodServices = filteredFoodServices.filter(
            (foodService) => filterAvailabilities(availabilities, foodService));
    }

    return filteredFoodServices;
}

function filterAvailabilities(availabilities, foodService) {
    for (const foodDay of foodService.days)
    {
        for (const availability of availabilities)
        {
            if (availability === foodDay)
            {
                return true;
            }
        }
    }
    return false;
}

//for distance filtering
function metersToMiles(meters) {
    return meters * 0.000621;
}