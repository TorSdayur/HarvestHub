/* Author: Tor Sdayur */

// fetches user location
// uses native web API
export function getLocation(setLocation) {
    const options = {
        maximumAge: Infinity,
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position, _, options) => {
            handleLocation(position, setLocation);
        })
    }
}

//callback to extract location
function handleLocation(position, setLocation) {
    const pos = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    }
    setLocation(pos);
}