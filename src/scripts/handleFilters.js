/* Author: Tor Sdayur */

//handlers responsible for handling filtering UI (FilterMenu)
//handles dropdown-type filtering menus
export function onClickDropdownHandler(filters, selectedFilter, setFilters)
{
    let filter = selectedFilter.value;
    let bgColor = selectedFilter.style.backgroundColor;
    // changes ui color
    selectedFilter.style.backgroundColor = (bgColor === "" ? "blue" : "");
    //updates items (filters)
    const updatedFilters = filters.includes(filter) 
        ? filters.filter(i => i !== filter)
        : [...filters, filter];

    setFilters(updatedFilters);
}

export function distSubmitHandler(keyPressed, selectedDist, setDist) {
    if (keyPressed === "Enter")
    {
        setDist(selectedDist);
    }
}